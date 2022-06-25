import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {

    const categories = [
        {
            name: "commerical",
            description:
            "Photos of grocery stores, food trucks, and other commercial projects"
        },
        {
            name: "portraits",
            description:
            "Portraits of people in my life"
        },
        {
            name: "landscape",
            description:
            "Fields, farmhouses, waterfalls, and the beauty of nature"
        }
    ]

    const handleClick = () => {
        console.log("click handled")
      }

    return (
    <header>
        <h2>
            <a data-testid="link" href="/">
                <span role="img" aria-label="camera">📸</span> Oh Snap!
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                <a data-testid="about" href="#about" onClick={() => handleClick()}>                        
                About me
                    </a>                
                </li>
                <li>
                    <span>Contact</span>
                </li>
                {categories.map((category) => (
                    <li className="mx-1" key={category.name}>
                        <span onClick={() => { handleClick(); }}>
                        {capitalizeFirstLetter(category.name)}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
    );
};

export default Nav;