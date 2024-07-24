import React from 'react'
import { Category } from '../../Components/Category/Category'
import package_hero from '../../assets/images/package-hero.jpg'

export const Packages = () => {
  return (
    <div>
      <Category category = "P-destination" image={package_hero} Utext = 'Discovered' Ltext='Tailored Adventure Packages' />
    </div>
  )
}
