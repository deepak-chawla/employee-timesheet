export const getWeekSundayDate = (week: number): string => {
  const sundayDate = getLastSunday(new Date());
  const weekSundayDate = new Date(
    sundayDate.getFullYear(),
    sundayDate.getMonth(),
    sundayDate.getDate() - 7 * week
  );
  return dateToString(weekSundayDate);
};

export const getWeekSaturdayDate = (week: number): string => {
  const sundayDate = getLastSunday(new Date());
  sundayDate.setDate(sundayDate.getDate() + 6);
  const weekSaturdayDate = new Date(
    sundayDate.getFullYear(),
    sundayDate.getMonth(),
    sundayDate.getDate() - 7 * week
  );
  return dateToString(weekSaturdayDate);
};

function getLastSunday(date: Date): Date {
  const currentDate = new Date(date);
  currentDate.setDate(currentDate.getDate() - currentDate.getDay());
  return currentDate;
}

function dateToString(date: Date): string {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`; // 2022-07-01
}
