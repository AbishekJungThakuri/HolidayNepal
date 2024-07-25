import React, { useState, useEffect } from 'react';

export const MultiOptionSelector = ({ label_text, given_options, onOptionsChange }) => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  // Notify parent component of changes in selected options
  useEffect(() => {
    if (onOptionsChange) {
      onOptionsChange(options);
    }
  }, [options, onOptionsChange]);

  // Handle button click to select or deselect options
  const handleActivities = (option) => {
    setOptions(prevOptions =>
      prevOptions.includes(option)
        ? prevOptions.filter(p => p !== option)
        : [...prevOptions, option]
    );
  };

  // Handle input change and filter options
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      const filtered = given_options.filter(option =>
        option.name.toLowerCase().includes(value.toLowerCase()) &&
        !options.includes(option.name) // Exclude already selected options
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  };

  // Handle selection of an option from the filtered list
  const handleOptionClick = (option) => {
    if (!options.includes(option.name)) {
      setOptions([...options, option.name]);
      setInputValue('');
      setFilteredOptions([]);
    }
  };

  // Handle removing a option tag
  const handleTagRemove = (optionToRemove) => {
    setOptions(options.filter(option => option !== optionToRemove));
  };

  return (
    <div className="options-container">
      <h2>{label_text}</h2>
      <div className="btns">
        {given_options.slice(0, 6).map((e, i) => (
          <button
            type="button"
            key={i}
            onClick={() => handleActivities(e.name)}
            style={{
              border: options.includes(e.name) ? '2px solid #000' : '',
              backgroundImage: `url(${e.image})`,
            }}
          >
            {e.name}
          </button>
        ))}
      </div>
      <div className="add-new">
        <label>Add More Options: </label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        {filteredOptions.length > 0 && (
          <ul className="suggestions-list">
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                style={{ cursor: 'pointer' }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="selected-options">
        {options.map((option, index) => (
          <div key={index} className="tag">
            {option}
            <button onClick={() => handleTagRemove(option)} style={{ marginLeft: '5px', color: 'red' }}>
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};





export const SimpleOptionsSelector = ({ label_text, given_options, onOptionsChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Handle button click to select a option
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    if (onOptionsChange) {
        onOptionsChange(option);
    }
  };

  return (
    <div className="options-container">
      <h2>{label_text}</h2>
      <div className="btns">
        {given_options.map((option, index) => (
          <button
            type="button"
            key={index}
            onClick={() => handleSelectOption(option.name)}
            style={{
              border: selectedOption === option.name ? '2px solid #000' : '',
              backgroundImage: `url(${option.image})`,
            }}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};