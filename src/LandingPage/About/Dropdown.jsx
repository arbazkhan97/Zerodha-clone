import React, { useState } from "react";
import "./Dropdown.css"; // Ensure you have a CSS file for styling

const Dropdown = ({position,description}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{cursor:'pointer'}} className="dropdown mt-2 ">
      <p onClick={() => setIsOpen(!isOpen)} >
        Bio ▼
      </p>
      {isOpen && (
        <div className="dropdown-content">
          <h4 className="text-muted" >{position}</h4>
          <p className="text-muted" > {description}
            
          </p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;