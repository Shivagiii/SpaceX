import {
    addDays,
    startOfMonth,
    endOfMonth,
    addMonths,
    startOfWeek,
    endOfWeek,
    isSameDay,
    startOfYear,
    addYears,
    endOfYear,
  } from "date-fns";
  import React from "react";
  import { DateRangePicker } from "react-date-range";
  
  function HandleCalender({ dateS, setDate }) {
    const defineds = {
      startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
      endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
      startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
      endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
      startOf3Month: startOfMonth(addMonths(new Date(), -4)),
      endOf3Month: endOfMonth(addMonths(new Date(), -1)),
  
      startOfLastSixMonth: startOfMonth(addMonths(new Date(), -7)),
      endOfLastSixMonth: endOfMonth(addMonths(new Date(), -1)),
      endOfYear: endOfYear(addYears(new Date(), -1)),
      startOfYear: startOfYear(addYears(new Date(), -1)),
      startOfTwoYear: startOfYear(addYears(new Date(), -2)),
    };
    const staticRangeHandler = {
      range: {},
      isSelected(range) {
        const definedRange = this.range();
        return (
          isSameDay(range.startDate, definedRange.startDate) &&
          isSameDay(range.endDate, definedRange.endDate)
        );
      },
    };
  
    function createStaticRanges(ranges) {
      return ranges.map((range) => ({ ...staticRangeHandler, ...range }));
    }
    const staticRanges = createStaticRanges([
      {
        label: "Past Week",
        range: () => ({
          startDate: defineds.startOfLastWeek,
          endDate: defineds.endOfLastWeek,
          key: "Past Week",
        }),
      },
  
      {
        label: "Past Month",
        range: () => ({
          startDate: defineds.startOfLastMonth,
          endDate: defineds.endOfLastMonth,
          key: "Past Month",
        }),
      },
      {
        label: "Past 3 Months",
        range: () => ({
          startDate: defineds.startOf3Month,
          endDate: defineds.endOf3Month,
          key: "Past 3 Months",
        }),
      },
      {
        label: "Past 6 Months",
        range: () => ({
          startDate: defineds.startOfLastSixMonth,
          endDate: defineds.endOfLastSixMonth,
          key: "Past 6 Months",
        }),
      },
      {
        label: "Past Year",
        range: () => ({
          startDate: defineds.startOfYear,
          endDate: defineds.endOfYear,
          key: "Past Year",
        }),
      },
      {
        label: "Past 2 Years",
        range: () => ({
          startDate: defineds.startOfTwoYear,
          endDate: defineds.endOfYear,
          key: "Past 2 Years",
        }),
      },
    ]);
    return (
      <DateRangePicker
        ranges={dateS}
        onChange={(item) => setDate([item.selection])}
        months={2}
        direction={"horizontal"}
        showMonthArrow={"true"}
        calendarHeight={1}
        staticRanges={staticRanges}
        inputRanges={[]}
      />
    );
  }
  
  export default HandleCalender;
  