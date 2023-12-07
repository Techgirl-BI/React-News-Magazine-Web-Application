import React, { useState } from "react";
import car from "../navBarImages/car.png";
import food from "../navBarImages/food.png";
import girl from "../navBarImages/girlish.png";
import music from "../navBarImages/music.png";
import sport from "../navBarImages/sport.png";
import technology from "../navBarImages/technology.png";

function Navbar() {
  const [categoriesDropDown, setCategoriesDropDown] = useState(false);
  const handleDropdownToggle = (itemId) => {
    if (itemId === categoriesDropDown) {
      setCategoriesDropDown(null); // Close the dropdown if it's already open
    } else {
      setCategoriesDropDown(itemId);
    }
  };
  
  const navigationItems = [
    {
      id: 1,
      label: "Category",
      hasDropdown: true,
      dropdownItems: [
        {
          id: 11,
          label: "Cooking",
          img: food,
          items: [
            "Cake Baking",
            "Cooking Training",
            "Drink Training",
            "Fast Foods",
          ],
          link: "/category/cooking",
        },
        {
          id: 12,
          label: "Girlish",
          img: girl,
          items: [
            "Dance Training",
            "Movies And Books",
            "Cooking Training",
            "Child Custody",
          ],
          link: "/category/girlish",
        },
        {
          id: 13,
          label: "Car",
          img: car,
          items: ["Car News", "Car Articles", " Car Prices", "Car Video"],
          link: "/category/car",
        },
        {
          id: 14,
          label: "Music",
          img: music,
          items: ["Composition", "Effect Of Music", "Music Mix", "Music Style"],
          link: "/category/music",
        },
        {
          id: 15,
          label: "Sport",
          img: sport,
          item: [
            "Sports News",
            "Football Results",
            "Boxing Results",
            "VolleyBall Results",
          ],
          link: "/category/sport",
        },
        {
          id: 16,
          label: "Technology",
          img: technology,
          item: [
            "Operating System",
            "Internet And Network",
            "Camera",
            "Laptop And Mobile",
          ],
          link: "/category/technology",
        },
      ],
    },
    {
      id: 2,
      label: "Pages",
      hasDropdown: true,
      dropdownItems: [
        {
            id: 21,
            label: "Sub Menu One",
            link: "/pages/submenuone",
          },
          {
            id: 22,
            label: "Sub Menu Two",
            link: "/pages/submenutwo",
          },
          {
            id: 23,
            label: "Sub Menu Three",
            link: "/pages/submenuthree",
          },
          {
            id: 24,
            label: "Sub Menu Four",
            link: "/pages/submenufour",
          },
      ],
    },
    {
        id: 3,
        label: "Contact Us",
        link: "/contactus"
    },
    {
        id: 4,
        label: "About Us",
        link: "/aboutus"
    }
  ];
  return (
    <nav>
      <ul>
        {navigationItems.map(item => <li key={item.id}>
            {item.hasDropdown? (
                <>
               <span onClick={() => handleDropdownToggle(item.id)}>{item.label}</span>
                {categoriesDropDown === item.id && (
                    <ul>
                        {item.dropdownItems.map(dropdownItem => (
                            <li key={dropdownItem.id}>
                                <a href={dropdownItem.link}>{dropdownItem.label}</a>
                            </li>
                        ))}
                    </ul>
                )}
                </>
            ) : (
               <a href={item.link}>{item.label}</a> 
            )}
        </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
