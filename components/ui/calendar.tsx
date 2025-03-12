"use client";

import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export type CalendarProps = {
  mode?: "single" | "multiple" | "range";
  selected?: Date | undefined;
};

function Calendar({ mode = "single", selected }: CalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(selected);

  return (
    <DayPicker
      mode={mode}
      selected={selectedDate}
      onSelect={setSelectedDate}
    />
  );
}

export { Calendar };
