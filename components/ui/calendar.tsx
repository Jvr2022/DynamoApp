"use client";
import React, { useState } from "react";
import { Calendar } from "./Calendar";

function ParentComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <Calendar
        mode="single" // or "multiple" or "range"
        selected={selectedDate}
        onSelect={(date) => setSelectedDate(date)}
      />
      {selectedDate ? (
        <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
      ) : (
        <p>No date selected</p>
      )}
    </div>
  );
}

export default ParentComponent;
