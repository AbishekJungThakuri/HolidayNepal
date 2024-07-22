import numpy as np
import pandas as pd
from math import radians, sin, cos, sqrt, atan2

# Read data
city_df = pd.read_excel("data/data.xlsx", sheet_name="City")
place_df = pd.read_excel("data/data.xlsx", sheet_name="Place")
accommodation_df = pd.read_excel("data/data.xlsx", sheet_name="Accommodation")


# Travel 
travel_speed = 25
travel_cost = 10

def haversine_distance(lat1, lon1, lat2, lon2):
        # Calculate the great-circle distance between two points on the Earth's surface.
        R = 6371  # Radius of the Earth in km
        dlat = np.radians(lat2 - lat1)
        dlon = np.radians(lon2 - lon1)
        a = np.sin(dlat / 2) ** 2 + np.cos(np.radians(lat1)) * np.cos(np.radians(lat2)) * np.sin(dlon / 2) ** 2
        c = 2 * np.arctan2(np.sqrt(a), np.sqrt(1 - a))
        distance = R * c
        return distance

def get_transport_time_and_cost(from_city, to_city):
    if from_city == to_city:
        return city_df.loc[city_df['id'] == from_city]['traffic_time'].values[0], city_df.loc[city_df['id'] == from_city]['traffic_cost'].values[0]
    
    lon1 = city_df.loc[city_df['id'] == from_city]['Longitude'].values[0]
    lon2 = city_df.loc[city_df['id'] == to_city]['Longitude'].values[0]
    lat1 = city_df.loc[city_df['id'] == from_city]['Latitude'].values[0]
    lat2 = city_df.loc[city_df['id'] == to_city]['Latitude'].values[0]
    # Calculate distance
    distance = haversine_distance(lat1=lat1, lon1=lon1, lat2=lat2, lon2=lon2)
    return round(distance / travel_speed), round(distance * travel_cost/ 100) * 100


def divide_activities(activities, days):
    # Initialize a list to hold the activities for each day
    day_activities = [[] for _ in range(days)]
    day_times = [0] * days  # Initialize the total time for each day to 0
    
    total_time = sum(activity['time'] for activity in activities)
    average_time_per_day = total_time / days
    current_day = 0
    
    for activity in activities:
        # Add the activity to the current day
        day_activities[current_day].append(activity)
        day_times[current_day] += activity['time']
        
        # Check if we should move to the next day
        # Ensure the current day does not exceed the average time by more than a certain threshold
        if current_day < days - 1 and day_times[current_day] >= average_time_per_day * 0.8:
            current_day += 1
    
    return day_activities

def nearest_neighbor_algorithm(df):
    num_places = len(df)
    visited = [False] * num_places
    tour = [0]  # Start at the first place
    visited[0] = True

    for _ in range(1, num_places):
        last = tour[-1]
        # last = 1
        nearest_dist = float('inf')
        nearest_index = -1
        
        for i in range(num_places):
            if not visited[i]:
                dist = haversine_distance(df.iloc[last]['latitude'], df.iloc[last]['longitude'],
                                        df.iloc[i]['latitude'], df.iloc[i]['longitude'])
                if dist < nearest_dist:
                    nearest_dist = dist
                    nearest_index = i

        tour.append(nearest_index)
        visited[nearest_index] = True

    tour.append(0)  # Return to the starting point
    return df.iloc[tour]
    
def give_plan(user_pref, no_of_plans = 1, city_df = city_df, place_df = place_df, accommodation_df = accommodation_df):
    if (user_pref['budget']/user_pref['days']) < 3000:
        return {'error' : "Budget can't match no of says"}
    
    # Hyperparameters
    # Places
    fav_activity_scale = 150 - (no_of_plans - 1) * 10
    fav_place_scale = 200 - (no_of_plans - 1) * 10
    type_scale = 20 + (no_of_plans - 1) * 5


    # Accommodation
    accommodation_type_scale = 2
    accommodation_cost_scale = 1000

    # Budget
    external_cost_ratio = 0.2

    # Other
    travel_hour_per_day = 14


    # Give numeric values to each place, transport and accumulation places
    place_df.loc[:, 'score'] = 1.0
    accommodation_df.loc[:, 'score'] = 1.0

    for i in range(len(place_df)):
        if(place_df.loc[i, 'name'] == 'TU Airport'):
            place_df.loc[i, 'score'] = 999999
            continue

        place_df.loc[i, 'score'] += len(set(place_df.iloc[i]['activities'].split(',')) & set(user_pref['fav_activities'])) * fav_activity_scale
        place_df.loc[i, 'score'] += len(set(place_df.iloc[i]['name'].split(',')) & set(user_pref['fav_places'])) * fav_place_scale
        place_df.loc[i, 'score'] += len(set(place_df.iloc[i]['type'].split(',')) & set(user_pref['place_type'])) * type_scale
        place_df.loc[i, 'score'] *= place_df.loc[i, 'rating']

    for i in range(len(accommodation_df)):
        accommodation_df.loc[i, 'score'] += len(set(accommodation_df.iloc[i]['type'].split(',')) & set(user_pref['accommodation_type'])) * accommodation_type_scale
        accommodation_df.loc[i, 'score'] += accommodation_cost_scale/accommodation_df.loc[i, 'cost']
        accommodation_df.loc[i, 'score'] *= accommodation_df.loc[i, 'popularity']

    accommodation_df.sort_values(by="score", ascending=False, inplace=True)

    top_ranked_accommodation = accommodation_df.groupby("city_id").head(5)
    city_acc_avg = pd.DataFrame(top_ranked_accommodation.groupby("city_id")['cost'].mean()) + 1000
    city_df = pd.merge(city_df, city_acc_avg, left_on="id", right_on="city_id")

    place_df.sort_values(by='score', ascending=False, inplace=True)


    # Function to get the transport time and cost between cities
    max_time = user_pref['days'] * travel_hour_per_day
    max_cost = user_pref['budget'] * (1 - external_cost_ratio)

    # Initialize
    total_time = 0
    total_cost = 0
    visited_places = []
    visited_cities = set()

    start_place = place_df.iloc[0]
    start_city = start_place['city_id']
    visited_cities.add(start_city)
    visited_places.append(start_place)
    total_time += start_place['required_time']
    current_city = start_city
    current_day = 1

    for index, row in place_df.iloc[1:].iterrows():
        place_city = row['city_id']
        place_time = row['required_time']
        place_fee = row['fee']

        
        if place_city not in visited_cities:
            transport_time, transport_cost = get_transport_time_and_cost(current_city, place_city)
        else:
            transport_time, transport_cost = city_df.loc[city_df['id'] == place_city]['traffic_time'].values[0], city_df.loc[city_df['id'] == 1]['traffic_cost'].values[0]
            
        return_time, return_cost = get_transport_time_and_cost(place_city, start_city)
        
        if (total_time + place_time + transport_time + return_time <= max_time and
            total_cost + place_fee + transport_cost + return_cost <= max_cost):
            # Visit the place
            total_time += place_time + transport_time
            total_cost += transport_cost
            visited_places.append(row)
            current_city = place_city
            
            if(int(total_time/10) == current_day+1):
                total_cost +=city_df.loc[city_df['id'] == place_city]['cost'].values[0]
                current_day=current_day+1
                
                
    
    # Add return journey to the start city
    return_time, return_cost = get_transport_time_and_cost(current_city, start_city)
    total_time += return_time
    total_cost += return_cost

    # Check if the return journey can be completed within the constraints
    if total_time <= max_time and total_cost <= max_cost:
        place_df = pd.DataFrame(visited_places)
    else:
        # If the return journey can't be completed, remove the last place visited
        last_place = visited_places.pop()
        total_time -= last_place['required_time'] + get_transport_time_and_cost(current_city, last_place['city_id'])[0]
        total_cost -= get_transport_time_and_cost(current_city, last_place['city_id'])[1]
        place_df = pd.DataFrame(visited_places)

    # Drop unnecessary columns
    place_df = place_df.drop(columns=['ratio']) if 'ratio' in place_df.columns else place_df

    # Get the sorted DataFrame based on the Nearest Neighbor algorithm
    sorted_places_df = nearest_neighbor_algorithm(place_df)
    day = 1
    city =  1
    tasks=[]

    for index, row in sorted_places_df[1:].iterrows():
        d = {}
        next_city = row['city_id']
        if(next_city != city):
            d = {
                'type': 'travel',
                'current_city_id': city,
                'next_city_id' : next_city,
                'time': get_transport_time_and_cost(city, next_city)[0],
                'cost': get_transport_time_and_cost(city, next_city)[1]
            }
            tasks.append(d)
            city = next_city
        
        d = {
            'type': 'visit',
            'place_id': row['id'],
            'time': row['required_time'] + city_df.loc[city_df['id'] == next_city]['traffic_time'].values[0],
            'cost': row['required_time'] + city_df.loc[city_df['id'] == next_city]['traffic_cost'].values[0]
        }
        tasks.append(d)
    result = [divide_activities(tasks, int(user_pref['days']))] 
    if no_of_plans > 1:
        result += give_plan(user_pref, no_of_plans-1)
    return result


# def format_result(result):
#     for i in range(len(result)):
#         print(f'Day : {i + 1}')

#         for task in result[i]:
#             if(task['type'] == 'visit'):
#                 print(f"Visit {place_df.loc[place_df['id'] == task['place_id']]['name'].values[0]}")
            
#             else:
#                 print(f"Travel to {city_df.loc[city_df['id'] == task['next_city_id']]['name'].values[0]}")

#         print('-------------------------------------')



# user_pref = {
#     "days": 5,
#     "budget": 100000,
#     "fav_activities": ["Exploring","Paragliding"],
#     "fav_places": ["Phewa Lake", "Lumbini"],
#     "place_type": ["Historic", "Natural"],
#     "accommodation_type": ["Cultural"]
# }
# for res in give_plan(user_pref=user_pref, no_of_plans=5):
#     print("\n\nPlan : ")
#     format_result(res)

