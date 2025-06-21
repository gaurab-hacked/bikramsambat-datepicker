import "../index.css";
import * as React from "react";
import { BSToAD } from "bikram-sambat-js";
import {
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { englishToNepaliNumber } from "nepali-number";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const NEPALI = "ne";

export const months = {
  en: [
    "Baishakh",
    "Jestha",
    "Ashadh",
    "Shrawan",
    "Bhadra",
    "Ashwin",
    "Kartik",
    "Mangsir",
    "Poush",
    "Magh",
    "Falgun",
    "Chaitra",
  ],
  ne: [
    "बैशाख",
    "जेठ",
    "असार",
    "सावन",
    "भदौ",
    "असोज",
    "कार्तिक",
    "मंसिर",
    "पौष",
    "माघ",
    "फागुन",
    "चैत",
  ],
};

export const weeks = {
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  ne: ["आईत", "सोम", "मंगल", "बुध", "बिही", "शुक्र", "शनि"],
};

export const bsCalendarData: number[][] = [
  // BS 2000-2009
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], // 2000
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2001
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], // 2002
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], // 2003
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], // 2004
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2005
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], // 2006
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], // 2007
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], // 2008
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2009

  // BS 2010-2019
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], // 20010
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], // 2011
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], // 2012
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2013
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], // 2014
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], // 2015
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], // 2016
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2017
  [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], // 2018
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], // 2019

  // BS 2020-2029
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], // 2020
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2021
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], // 2022
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], // 2023
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], // 2024
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2025
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], // 2026
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], // 2027
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2028
  [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30], // 2029

  // BS 2030-2039
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], // 2030
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], // 2031
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2032
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], // 2033
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], // 2034
  [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], // 2035
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2036
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], // 2037
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], // 2038
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], // 2039

  // BS 2040-2049
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2040
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], // 2041
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], // 2042
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], // 2043
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2044
  [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], // 2045
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], // 2046
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], // 2047
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2048
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], // 2049

  // BS 2050-2059
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], // 2050
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], // 2051
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2052
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], // 2053
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], // 2054
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2055
  [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30], // 2056
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], // 2057
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], // 2058
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2059

  // BS 2060-2069
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], // 2060
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], // 2061
  [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31], // 2062
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2063
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], // 2064
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], // 2065
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], // 2066
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2067
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], // 2068
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], // 2069

  // BS 2070-2079
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], // 2070
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2071
  [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], // 2072
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], // 2073
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], // 2074
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2075
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], // 2076
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], // 2077
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], // 2078
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2079

  // BS 2080-2089
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], // 2080
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], // 2081
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], // 2082
  [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30], // 2083
  [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30], // 2084
  [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30], // 2085
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], // 2086
  [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30], // 2087
  [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30], // 2088
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], // 2089

  // BS 2090-2099
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], // 2090
  [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30], // 2091
  [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30], // 2092
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], // 2093
  [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30], // 2094
  [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30], // 2095
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], // 2096
  [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30], // 2097
  [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30], // 2098
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], // 2099
];

// Fixed starting day for BS 2000/1/1 (which corresponds to Wednesday)
const BS_2000_1_1_DAY_OF_WEEK = 3; // Wednesday

function getNumberOfDaysInBSMonth(yearMonth: { year: number; month: number }) {
  const { year, month } = yearMonth;

  // Ensure year is within our data range
  if (year < 2000 || year > 2099) {
    return 30; // Default fallback
  }

  const yearIndex = year - 2000;
  return bsCalendarData[yearIndex][month - 1];
}

function calculateFirstDayOfMonth(year: number, month: number): number {
  // Calculate total days from BS 2000/1/1 to the first day of the given month
  let totalDays = 0;

  // Add days for complete years
  for (let y = 2000; y < year; y++) {
    const yearIndex = y - 2000;
    if (yearIndex < bsCalendarData.length) {
      totalDays += bsCalendarData[yearIndex].reduce(
        (sum, days) => sum + days,
        0
      );
    }
  }

  // Add days for complete months in the current year
  for (let m = 1; m < month; m++) {
    totalDays += getNumberOfDaysInBSMonth({ year, month: m });
  }

  // Calculate the day of week for the first day of the month
  // BS 2000/1/1 was Wednesday (day 3)
  return (BS_2000_1_1_DAY_OF_WEEK + totalDays) % 7;
}

function parseBSDate(date: string, separator = "-") {
  const [year, month, day] = date.split(separator).map(Number);

  try {
    const adDate = new Date(BSToAD(date));
    return {
      adDate,
      bsDay: day,
      bsMonth: month,
      bsYear: year,
      weekDay: adDate.getDay(),
    };
  } catch (error) {
    // Fallback if BSToAD fails
    return {
      adDate: new Date(),
      bsDay: day,
      bsMonth: month,
      bsYear: year,
      weekDay: 0,
    };
  }
}

function stitchDate(
  date: { year: number; month: number; day: number },
  separator = "-"
) {
  return `${date.year}${separator}${date.month
    .toString()
    .padStart(2, "0")}${separator}${date.day.toString().padStart(2, "0")}`;
}

function formatNepaliDate(date: string, locale: "en" | "ne") {
  const { bsYear, bsMonth, bsDay } = parseBSDate(date);
  const monthName = months[locale][bsMonth - 1];
  const day = locale === NEPALI ? englishToNepaliNumber(bsDay) : bsDay;
  const year = locale === NEPALI ? englishToNepaliNumber(bsYear) : bsYear;

  return `${day} ${monthName}, ${year}`;
}

type ViewMode = "days" | "months" | "years";
const NepaliDatePicker = ({
  className,
  value,
  onChange,
  locale = NEPALI,
  disableFuture = false,
  placeholder = "Pick a date",
  showTodayButton = false,
  disabled = false,
  ...otherProps
}: {
  className?: string;
  value?: string;
  onChange?: (date: string) => void;
  locale?: "en" | "ne";
  disableFuture?: boolean;
  showTodayButton?: boolean;
  disabled?: boolean;
  placeholder?: string;
  [key: string]: any;
}) => {
  const [date, setDate] = React.useState<string | undefined>(value);
  const [open, setOpen] = React.useState(false);
  const [viewMode, setViewMode] = React.useState<ViewMode>("days");
  React.useEffect(() => {
    return () => {
      document.body.style.pointerEvents = "auto";
      document.body.style.userSelect = "auto";
    };
  }, []);

  const today = React.useMemo(() => {
    return {
      bsYear: 2082,
      bsMonth: 2,
      bsDay: 2,
      adDate: new Date(),
      weekDay: new Date().getDay(),
    };
  }, []);

  const parsedDate = date ? parseBSDate(date) : null;

  const [displayedMonthYear, setDisplayedMonthYear] = React.useState<{
    year: number;
    month: number;
  } | null>(null);

  const [yearRange, setYearRange] = React.useState(() => {
    const currentYear = today.bsYear;
    let start = Math.floor(currentYear / 20) * 20;
    if (start < 2000) start = 2000;
    let end = start + 19;
    if (end > 2099) {
      end = 2099;
      start = 2080;
    }
    return { start, end };
  });

  React.useEffect(() => {
    if (value !== undefined) {
      setDate(value);
      if (value) {
        const parsed = parseBSDate(value);
        setDisplayedMonthYear({ year: parsed.bsYear, month: parsed.bsMonth });
      }
    }
  }, [value]);

  React.useEffect(() => {
    if (open) {
      const currentYear = parsedDate ? parsedDate.bsYear : today.bsYear;
      setYearRange({
        start: Math.floor(currentYear / 20) * 20,
        end: Math.floor(currentYear / 20) * 20 + 19,
      });

      if (parsedDate) {
        setDisplayedMonthYear({
          year: parsedDate.bsYear,
          month: parsedDate.bsMonth,
        });
      } else {
        setDisplayedMonthYear({ year: today.bsYear, month: today.bsMonth });
      }
    }
  }, [open]);

  const handleDateSelect = (bsDate: {
    year: number;
    month: number;
    day: number;
  }) => {
    const newDate = stitchDate(bsDate);
    setDate(newDate);
    setDisplayedMonthYear({ year: bsDate.year, month: bsDate.month });
    onChange?.(newDate);
    setOpen(false);
    setViewMode("days");
  };

  const handleMonthSelect = (month: number) => {
    setDisplayedMonthYear((prev) =>
      prev ? { ...prev, month } : { year: today.bsYear, month }
    );
    setViewMode("days");
  };

  const handleYearSelect = (year: number) => {
    setDisplayedMonthYear((prev) =>
      prev ? { ...prev, year } : { year, month: today.bsMonth }
    );
    setViewMode("months");
  };

  const handlePreviousMonth = () => {
    if (!displayedMonthYear) return;

    let newMonth = displayedMonthYear.month - 1;
    let newYear = displayedMonthYear.year;

    if (newMonth < 1) {
      newMonth = 12;
      newYear--;
    }

    if (newYear < 2000) return;

    setDisplayedMonthYear({ year: newYear, month: newMonth });
  };

  const handleNextMonth = () => {
    if (!displayedMonthYear) return;

    let newMonth = displayedMonthYear.month + 1;
    let newYear = displayedMonthYear.year;

    if (newMonth > 12) {
      newMonth = 1;
      newYear++;
    }

    if (newYear > 2099) return;

    if (disableFuture) {
      if (
        newYear > today.bsYear ||
        (newYear === today.bsYear && newMonth > today.bsMonth)
      ) {
        return;
      }
    }

    setDisplayedMonthYear({ year: newYear, month: newMonth });
  };

  const handlePreviousYear = () => {
    if (viewMode === "days" || viewMode === "months") {
      if (displayedMonthYear) {
        if (displayedMonthYear.year <= 2000) return;
        setDisplayedMonthYear({
          ...displayedMonthYear,
          year: displayedMonthYear.year - 1,
        });
      }
    } else {
      if (yearRange.start <= 2000) {
        setYearRange({ start: 2000, end: 2019 });
      } else {
        setYearRange((prev) => ({
          start: prev.start - 20,
          end: prev.end - 20,
        }));
      }
    }
  };

  const handleNextYear = () => {
    if (viewMode === "days" || viewMode === "months") {
      if (displayedMonthYear) {
        const newYear = displayedMonthYear.year + 1;
        if (newYear > 2099) return;
        if (disableFuture && newYear > today.bsYear) return;
        setDisplayedMonthYear({ ...displayedMonthYear, year: newYear });
      }
    } else {
      const newStart = yearRange.start + 20;
      const newEnd = yearRange.end + 20;
      if (newEnd > 2099) return;
      if (disableFuture && newStart > today.bsYear) return;
      setYearRange({ start: newStart, end: newEnd });
    }
  };

  const isDisabled = (year: number, month?: number, day?: number) => {
    if (year < 2000 || year > 2099) return true;

    if (disableFuture) {
      const compareDate = day
        ? { year, month: month!, day }
        : month
        ? { year, month, day: 1 }
        : { year, month: 1, day: 1 };

      const current = today;
      return (
        compareDate.year > current.bsYear ||
        (compareDate.year === current.bsYear &&
          compareDate.month > current.bsMonth) ||
        (compareDate.year === current.bsYear &&
          compareDate.month === current.bsMonth &&
          compareDate.day > current.bsDay)
      );
    }
    return false;
  };

  const renderDaysView = () => {
    if (!displayedMonthYear) return null;

    const daysInMonth = getNumberOfDaysInBSMonth({
      year: displayedMonthYear.year,
      month: displayedMonthYear.month,
    });

    // Use our fixed calculation for the first day of month
    const firstDayOfMonth = calculateFirstDayOfMonth(
      displayedMonthYear.year,
      displayedMonthYear.month
    );

    const totalDaysToShow = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;

    // Get previous month info for leading days
    let prevMonth = displayedMonthYear.month - 1;
    let prevYear = displayedMonthYear.year;
    if (prevMonth < 1) {
      prevMonth = 12;
      prevYear--;
    }
    const daysInPrevMonth = getNumberOfDaysInBSMonth({
      year: prevYear,
      month: prevMonth,
    });

    const days = Array.from({ length: totalDaysToShow }, (_, i) => {
      const day = i - firstDayOfMonth + 1;
      const isCurrentMonth = day > 0 && day <= daysInMonth;
      const isSaturday = i % 7 === 6;

      return {
        day: isCurrentMonth
          ? day
          : day <= 0
          ? daysInPrevMonth + day
          : day - daysInMonth,
        isCurrentMonth,
        isToday:
          isCurrentMonth &&
          day === today.bsDay &&
          displayedMonthYear.month === today.bsMonth &&
          displayedMonthYear.year === today.bsYear,
        isSelected:
          isCurrentMonth &&
          parsedDate &&
          day === parsedDate.bsDay &&
          displayedMonthYear.month === parsedDate.bsMonth &&
          displayedMonthYear.year === parsedDate.bsYear,
        isDisabled:
          isCurrentMonth &&
          isDisabled(displayedMonthYear.year, displayedMonthYear.month, day),
        isSaturday,
      };
    });

    return (
      <>
        <div className="bikramsambat-datepicker-calendar-header">
          {weeks[locale].map((day, index) => (
            <div
              key={day}
              className={`bikramsambat-datepicker-calendar-cell ${
                index === 6 ? "saturday" : ""
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="bikramsambat-datepicker-calendar">
          {days.map((dayData, index) => (
            <button
              key={index}
              disabled={dayData.isDisabled}
              className={`bikramsambat-datepicker-calendar-cell ${
                !dayData.isCurrentMonth ? "opacity-50" : ""
              } ${dayData.isToday ? "today" : ""} ${
                dayData.isSelected ? "selected" : ""
              } ${dayData.isDisabled ? "disabled" : ""} ${
                dayData.isSaturday ? "saturday" : ""
              }`}
              onClick={() => {
                if (dayData.isCurrentMonth && !dayData.isDisabled) {
                  handleDateSelect({
                    year: displayedMonthYear.year,
                    month: displayedMonthYear.month,
                    day: dayData.day,
                  });
                }
              }}
            >
              {locale === NEPALI
                ? englishToNepaliNumber(dayData.day)
                : dayData.day}
            </button>
          ))}
        </div>
      </>
    );
  };

  const renderMonthsView = () => {
    if (!displayedMonthYear) return null;

    return (
      <div className="bikramsambat-datepicker-months-grid">
        {months[locale].map((month, index) => {
          const monthNumber = index + 1;
          const disabled = isDisabled(displayedMonthYear.year, monthNumber);

          return (
            <Button
              key={month}
              variant="ghost"
              disabled={disabled}
              className={`bikramsambat-datepicker-month-button ${
                parsedDate &&
                parsedDate.bsMonth === monthNumber &&
                parsedDate.bsYear === displayedMonthYear.year
                  ? "selected"
                  : ""
              }`}
              onClick={() => !disabled && handleMonthSelect(monthNumber)}
            >
              {month}
            </Button>
          );
        })}
      </div>
    );
  };

  const renderYearsView = () => {
    const years = Array.from(
      { length: 20 },
      (_, i) => yearRange.start + i
    ).filter((year) => year >= 2000 && year <= 2099);

    return (
      <div className="bikramsambat-datepicker-years-grid">
        {years.map((year) => {
          const disabled = isDisabled(year);
          const isSelected = parsedDate && parsedDate.bsYear === year;
          const isCurrentYear = year === today.bsYear;

          return (
            <Button
              key={year}
              variant="ghost"
              disabled={disabled}
              className={`bikramsambat-datepicker-year-button ${
                isSelected ? "selected" : ""
              } ${!isSelected && isCurrentYear ? "current-year" : ""}`}
              onClick={() => !disabled && handleYearSelect(year)}
            >
              {locale === NEPALI ? englishToNepaliNumber(year) : year}
            </Button>
          );
        })}
      </div>
    );
  };

  // Use the displayedMonthYear for header display but fallback to selected date or today
  const displayMonthYear =
    displayedMonthYear ||
    (parsedDate
      ? { year: parsedDate.bsYear, month: parsedDate.bsMonth }
      : { year: today.bsYear, month: today.bsMonth });

  return (
    <div className="bikramsambat-datepicker">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={`bikramsambat-datepicker-trigger ${className || ""}`}
            disabled={disabled}
            {...otherProps}
          >
            {date ? formatNepaliDate(date, locale) : <span>{placeholder}</span>}
            <CalendarIcon className="bikramsambat-calendar-icon" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="bikramsambat-datepicker-popover"
        >
          <div className="bikramsambat-datepicker-content">
            <div className="bikramsambat-datepicker-header">
              <div className="bikramsambat-datepicker-nav">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handlePreviousYear}
                  className="bikramsambat-nav-button"
                  disabled={
                    viewMode === "years"
                      ? yearRange.start <= 2000
                      : displayedMonthYear
                      ? displayedMonthYear.year <= 2000
                      : false
                  }
                >
                  <ChevronsLeft className="bikramsambat-icon" />
                </Button>

                {viewMode === "days" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handlePreviousMonth}
                    className="bikramsambat-nav-button"
                    disabled={
                      displayedMonthYear?.year === 2000 &&
                      displayedMonthYear?.month === 1
                    }
                  >
                    <ChevronLeft className="bikramsambat-icon" />
                  </Button>
                )}
              </div>

              <Button
                variant="ghost"
                className="bikramsambat-datepicker-title"
                onClick={() =>
                  setViewMode(viewMode === "days" ? "months" : "years")
                }
              >
                {viewMode === "days" && (
                  <>
                    {months[locale][displayMonthYear.month - 1]}{" "}
                    {locale === NEPALI
                      ? englishToNepaliNumber(displayMonthYear.year)
                      : displayMonthYear.year}
                  </>
                )}
                {viewMode === "months" &&
                  (locale === NEPALI
                    ? englishToNepaliNumber(displayMonthYear.year)
                    : displayMonthYear.year)}
                {viewMode === "years" &&
                  `${yearRange.start} - ${yearRange.end}`}
              </Button>

              <div className="bikramsambat-datepicker-nav">
                {viewMode === "days" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleNextMonth}
                    className="bikramsambat-nav-button"
                    disabled={
                      (disableFuture &&
                        displayMonthYear.year >= today.bsYear &&
                        displayMonthYear.month >= today.bsMonth) ||
                      (displayedMonthYear?.year === 2099 &&
                        displayedMonthYear?.month === 12)
                    }
                  >
                    <ChevronRight className="bikramsambat-icon" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleNextYear}
                  className="bikramsambat-nav-button"
                  disabled={
                    viewMode === "years"
                      ? (disableFuture && yearRange.end >= today.bsYear) ||
                        yearRange.end >= 2099
                      : displayedMonthYear
                      ? (disableFuture &&
                          displayedMonthYear.year >= today.bsYear) ||
                        displayedMonthYear.year >= 2099
                      : false
                  }
                >
                  <ChevronsRight className="bikramsambat-icon" />
                </Button>
              </div>
            </div>

            {viewMode === "days" && renderDaysView()}
            {viewMode === "months" && renderMonthsView()}
            {viewMode === "years" && renderYearsView()}

            {showTodayButton && (
              <div className="bikramsambat-today-button-container">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const todayDate = "2082-02-02";
                    setDate(todayDate);
                    onChange?.(todayDate);
                    setOpen(false);
                    setViewMode("days");
                  }}
                  disabled={
                    disableFuture &&
                    isDisabled(today.bsYear, today.bsMonth, today.bsDay)
                  }
                >
                  {locale === NEPALI ? "आज" : "Today"}
                </Button>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NepaliDatePicker;
