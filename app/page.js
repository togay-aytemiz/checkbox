"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [items, setItems] = useState([
    { id: 1, label: "Lion", isChecked: false },
    { id: 2, label: "Tiger", isChecked: false },
    { id: 3, label: "Elephant", isChecked: false },
    { id: 4, label: "Giraffe", isChecked: false },
    { id: 5, label: "Zebra", isChecked: false },
    { id: 6, label: "Kangaroo", isChecked: false },
    { id: 7, label: "Panda", isChecked: false },
    { id: 8, label: "Koala", isChecked: false },
    { id: 9, label: "Rhinoceros", isChecked: false },
    { id: 10, label: "Hippopotamus", isChecked: false }
  ]);

  const handleCheckboxChange = (id) => {
    const updatedItems = items.map(checkbox => {
      if (checkbox.id === id) {
        checkbox.isChecked = !checkbox.isChecked
      }
      return checkbox
    })

    setItems(updatedItems)
  }

  const handleSelectAllOrDeselectAll = () => {
    const areAllChecked = items.every(checkbox => checkbox.isChecked);
    const updatedItems = items.map(checkbox => ({
      ...checkbox,
      isChecked: !areAllChecked
    }));

    setItems(updatedItems);
  };

  const allChecked = items.every(checkbox => checkbox.isChecked);
  const buttonLabel = allChecked ? "Deselect All" : "Select All";



  return (
    <>
      <div className="mx-10 my-10">
        {items.map(checkbox => <div key={checkbox.id}>
          <input
            id={`checkbox-${checkbox.id}`} 
            type="checkbox"
            checked={checkbox.isChecked}
            onChange={() => handleCheckboxChange(checkbox.id)}
          />
          {" "}
          <label htmlFor={`checkbox-${checkbox.id}`}> 
            {checkbox.label}
          </label>
        </div>)}
        <button 
          className={`p-3 bg-black text-white rounded-lg mt-5 transition-all duration-500 ease-in-out`} 
          onClick={handleSelectAllOrDeselectAll}
        >
          {buttonLabel}
        </button>
      </div>
    </>
  );
}