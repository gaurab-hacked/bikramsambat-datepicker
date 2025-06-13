"use client";

import * as React from "react";
import { BSToAD } from "bikram-sambat-js";

import { englishToNepaliNumber } from "nepali-number";

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
  const yearIndex = year - 2000;
  if (yearIndex < bsCalendarData.length) {
    for (let m = 1; m < month; m++) {
      totalDays += bsCalendarData[yearIndex][m - 1];
    }
  }

  // Calculate the day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
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

  const popoverRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  // Close popover when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  // Handle ESC key
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [open]);

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

    const firstDayOfMonth = calculateFirstDayOfMonth(
      displayedMonthYear.year,
      displayedMonthYear.month
    );

    const totalDaysToShow = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;

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
      <div className="p-1">
        <div className="grid grid-cols-7 gap-1 mb-3">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day, index) => (
              <div
                key={day}
                className={`
                  flex h-9 items-center justify-center text-center text-xs font-medium tracking-wide uppercase
                  ${index === 6 ? "text-red-600" : "text-slate-600"}
                `}
              >
                {day}
              </div>
            )
          )}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((dayData, index) => (
            <button
              key={index}
              type="button"
              disabled={dayData.isDisabled}
              className={`
                relative h-9 w-9 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out
                focus:outline-none focus:ring-2 border border-slate-200/50 focus:ring-slate-200 focus:ring-offset-1 focus:z-10
                ${
                  !dayData.isCurrentMonth
                    ? "text-slate-400 hover:text-slate-500"
                    : "text-slate-900"
                }
                ${
                  dayData.isToday && !dayData.isSelected
                    ? "bg-blue-50 text-slate-300 font-medium ring-1 ring-blue-200 hover:bg-blue-100"
                    : ""
                }
                ${
                  dayData.isSelected
                    ? "bg-blue-600 text-white font-medium shadow-sm hover:bg-slate-300 ring-1 ring-blue-600"
                    : !dayData.isToday && dayData.isCurrentMonth
                    ? "hover:bg-slate-100"
                    : ""
                }
                ${
                  dayData.isDisabled
                    ? "cursor-not-allowed opacity-40 hover:bg-transparent"
                    : "cursor-pointer"
                }
                ${
                  dayData.isSaturday &&
                  !dayData.isToday &&
                  !dayData.isSelected &&
                  dayData.isCurrentMonth
                    ? "text-red-600 hover:bg-red-50"
                    : ""
                }
              `}
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
      </div>
    );
  };

  const renderMonthsView = () => {
    if (!displayedMonthYear) return null;

    return (
      <div className="grid grid-cols-3 gap-2 p-2">
        {months[locale].map((month, index) => {
          const monthNumber = index + 1;
          const disabled = isDisabled(displayedMonthYear.year, monthNumber);
          const isSelected =
            parsedDate &&
            parsedDate.bsMonth === monthNumber &&
            parsedDate.bsYear === displayedMonthYear.year;

          return (
            <button
              key={month}
              type="button"
              disabled={disabled}
              className={`
                h-11 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-1
                ${
                  disabled
                    ? "cursor-not-allowed opacity-40 bg-slate-50 text-slate-400"
                    : "cursor-pointer"
                }
                ${
                  isSelected
                    ? "bg-blue-600 text-white font-medium shadow-sm hover:bg-slate-300"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }
              `}
              onClick={() => !disabled && handleMonthSelect(monthNumber)}
            >
              {month}
            </button>
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
      <div className="grid grid-cols-4 gap-2 p-2">
        {years.map((year) => {
          const disabled = isDisabled(year);
          const isSelected = parsedDate && parsedDate.bsYear === year;
          const isCurrentYear = year === today.bsYear;

          return (
            <button
              key={year}
              type="button"
              disabled={disabled}
              className={`
                h-11 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-1
                ${
                  disabled
                    ? "cursor-not-allowed opacity-40 bg-slate-50 text-slate-400"
                    : "cursor-pointer"
                }
                ${
                  isSelected
                    ? "bg-blue-600 text-white font-medium shadow-sm hover:bg-slate-300"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }
                ${
                  !isSelected && isCurrentYear
                    ? "ring-1 ring-blue-300 bg-blue-50 text-slate-300"
                    : ""
                }
              `}
              onClick={() => !disabled && handleYearSelect(year)}
            >
              {locale === NEPALI ? englishToNepaliNumber(year) : year}
            </button>
          );
        })}
      </div>
    );
  };

  const displayMonthYear =
    displayedMonthYear ||
    (parsedDate
      ? { year: parsedDate.bsYear, month: parsedDate.bsMonth }
      : { year: today.bsYear, month: today.bsMonth });

  // Initialize displayedMonthYear when component mounts
  React.useEffect(() => {
    if (!displayedMonthYear) {
      setDisplayedMonthYear(
        parsedDate
          ? { year: parsedDate.bsYear, month: parsedDate.bsMonth }
          : { year: today.bsYear, month: today.bsMonth }
      );
    }
  }, [parsedDate, displayedMonthYear]);

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        className={`
          group flex w-full min-w-[200px] items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3 text-left text-sm font-medium
          shadow-sm transition-all duration-200 ease-in-out
          hover:border-slate-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 focus:border-slate-100
          ${!value ? "text-slate-500" : "text-slate-900"}
          ${
            disabled
              ? "cursor-not-allowed opacity-60 bg-slate-50 hover:border-slate-300 hover:shadow-sm"
              : "cursor-pointer"
          }
          ${className}
        `}
        disabled={disabled}
        onClick={() => setOpen(!open)}
        {...otherProps}
      >
        <span className="flex items-center">
          {date ? (
            <span className="font-medium">
              {formatNepaliDate(date, locale)}
            </span>
          ) : (
            <span className="text-slate-500">{placeholder}</span>
          )}
        </span>
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          } ${
            disabled
              ? "text-slate-400"
              : "text-slate-600 group-hover:text-slate-700"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" />

          <div
            ref={popoverRef}
            className="absolute top-full left-0 z-50 mt-2 rounded-xl border border-slate-200 bg-white shadow-xl ring-opacity-5"
            style={{ minWidth: "320px" }}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 bg-slate-50 rounded-t-xl">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePreviousYear}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
                  disabled={
                    viewMode === "years"
                      ? yearRange.start <= 2000
                      : displayedMonthYear
                      ? displayedMonthYear.year <= 2000
                      : false
                  }
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                    />
                  </svg>
                </button>

                {viewMode === "days" && (
                  <button
                    type="button"
                    onClick={handlePreviousMonth}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
                    disabled={
                      displayedMonthYear?.year === 2000 &&
                      displayedMonthYear?.month === 1
                    }
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>

              <button
                type="button"
                className="px-3 py-1 text-sm font-medium text-slate-900 rounded-md hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-1 transition-all duration-150"
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
              </button>

              <div className="flex items-center gap-1">
                {viewMode === "days" && (
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
                    disabled={
                      (disableFuture &&
                        displayMonthYear.year >= today.bsYear &&
                        displayMonthYear.month >= today.bsMonth) ||
                      (displayedMonthYear?.year === 2099 &&
                        displayedMonthYear?.month === 12)
                    }
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNextYear}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
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
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-b-xl">
              {viewMode === "days" && renderDaysView()}
              {viewMode === "months" && renderMonthsView()}
              {viewMode === "years" && renderYearsView()}

              {showTodayButton && (
                <div className="flex justify-center border-t border-slate-100 px-4 py-3">
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-150"
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
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NepaliDatePicker;
