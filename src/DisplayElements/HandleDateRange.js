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
  import React,{useEffect} from "react";
  import { DateRangePicker } from "react-date-range";

function HandleDateRange({ dateS, setDate }) {
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
          label: "Past Week",
        }),
      },
  
      {
        label: "Past Month",
        range: () => ({
          startDate: defineds.startOfLastMonth,
          endDate: defineds.endOfLastMonth,
          label: "Past Month",
        }),
      },
      {
        label: "Past 3 Months",
        range: () => ({
          startDate: defineds.startOf3Month,
          endDate: defineds.endOf3Month,
          label: "Past 3 Months",
        }),
      },
      {
        label: "Past 6 Months",
        range: () => ({
          startDate: defineds.startOfLastSixMonth,
          endDate: defineds.endOfLastSixMonth,
          label: "Past 6 Months",
        }),
      },
      {
        label: "Past Year",
        range: () => ({
          startDate: defineds.startOfYear,
          endDate: defineds.endOfYear,
          label: "Past Year",
        }),
      },
      {
        label: "Past 2 Years",
        range: () => ({
          startDate: defineds.startOfTwoYear,
          endDate: defineds.endOfYear,
          label: "Past 2 Years",
        }),
      },
    ]);
    useEffect(() => {
        console.log(dateS);
        document.getElementById("myModal2").style.display = "none";
      }, [dateS]);
       function handleChange(item){
       // console.log(item)
      setDate([item.selection])
      console.log(dateS)
       }
  return (
    <DateRangePicker
    ranges={dateS}
    onChange={handleChange}
    months={2}
    direction={"horizontal"}
    showMonthArrow={"true"}
    calendarHeight={1}
    staticRanges={staticRanges}
    inputRanges={[]}
  />
  )
}

export default HandleDateRange