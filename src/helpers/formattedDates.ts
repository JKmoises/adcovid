/* eslint-disable @typescript-eslint/no-unused-expressions */

const OPTIONS: Intl.DateTimeFormatOptions = {
  month: "2-digit",
  day: "2-digit",
  year: "2-digit",
};

export function yesterdayDate(): string{
  let yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 2);
  
  let yesterdayDateFormat = yesterdayDate.toLocaleDateString("en-US", OPTIONS);

  return removeZeroOfDate(yesterdayDateFormat);
}

export function dateMonthAgo(): string{
  let dateMonthAgo = new Date();
  dateMonthAgo.setDate(dateMonthAgo.getDate() - 30);
  
  let dateMonthAgoFormat = dateMonthAgo.toLocaleDateString("en-US", OPTIONS);
  
  return removeZeroOfDate(dateMonthAgoFormat);
}

function removeZeroOfDate(date: string): string{
  const dateWithoutZeroOfDay = date.charAt(0) === "0" ? date.slice(1) : date;
  let zeroOfMonth = dateWithoutZeroOfDay.at(dateWithoutZeroOfDay.indexOf("/") + 1);
  
  return zeroOfMonth === '0'
    ? dateWithoutZeroOfDay.replace(zeroOfMonth, "")
    : dateWithoutZeroOfDay;
}