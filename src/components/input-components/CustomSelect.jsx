import React, { useState } from 'react';

import Select from 'react-select';



const categoryOptions = [
  "Men's Casual Wear",
  "Men's Formal Wear",
  "Women's Ethnic Wear",
  "Women's Western Wear",
  "Activewear & Sportswear",
  "Kids' Clothing",
  "Lingerie & Innerwear",
  "Footwear (Men, Women, Kids)",
  "Winter & Seasonal Wear",
  "Fashion Accessories (Bags, Belts, Scarves)",
  "Smartphones & Accessories",
  "Laptops & Desktops",
  "Smartwatches & Wearables",
  "Headphones & Earbuds",
  "Televisions & Home Entertainment",
  "Gaming Consoles & Accessories",
  "Tablets & E-Readers",
  "Cameras & Photography Gear",
  "Home Audio Systems",
  "Power Banks & Charging Devices",
  "Living Room Furniture",
  "Bedroom Furniture",
  "Office Furniture",
  "Storage & Organization",
  "Lighting & Lamps",
  "Wall Art & Paintings",
  "Rugs & Carpets",
  "Curtains & Blinds",
  "Home Furnishings (Cushions, Covers)",
  "Outdoor & Garden Furniture",
  "Skincare Products",
  "Hair Care",
  "Makeup & Cosmetics",
  "Men's Grooming",
  "Health & Nutrition (Supplements, Vitamins)",
  "Personal Hygiene (Soaps, Sanitizers)",
  "Fragrances & Perfumes",
  "Fitness Equipment (Yoga, Dumbbells)",
  "Massagers & Relaxation Products",
  "Oral Care",
  "Kitchen Appliances (Mixers, Ovens)",
  "Cookware & Bakeware",
  "Dining & Serveware",
  "Cleaning Supplies",
  "Storage Containers",
  "Home Improvement Tools",
  "Gardening Tools & Supplies",
  "Water Bottles & Flasks",
  "Air Purifiers & Water Purifiers",
  "Smart Home Devices (Lights, Locks, Cameras)",
].map(category => ({ label: category, value: category }));;




const CustomSelect = ({value, onChange}) => {
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);

    return (
        <>
            <Select
                className="basic-single"
                classNamePrefix="Category"
                defaultValue={null}
                placeholder="Category..."
                isClearable={isClearable}
                isSearchable={isSearchable}
                name="category"
                options={categoryOptions}
                value={value}
                onChange={onChange}
                menuPortalTarget={document.body}
                menuPosition='absolute'
                styles={{ 
                    menuPortal: base => ({ ...base, zIndex: 9999})
                }}
                
            />
        </>
    )
};

export default CustomSelect;

