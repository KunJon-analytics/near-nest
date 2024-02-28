"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";
import { useTheme } from "next-themes";

import "react-date-range/dist/styles.css";
import "@/styles/date.css";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  disabledDates,
}) => {
  const { theme } = useTheme();

  return (
    <DateRange
      rangeColors={["#ff57d8", "#00f6ff", "#5f5af6"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
      className={cn(
        "bg-transparent dark:bg-transparent",
        theme === "light" ? "light-theme" : "dark-theme"
      )}
    />
  );
};

export default DatePicker;
