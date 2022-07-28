export const getWeekSundayDate = (week: number) => {
  const now = getLastSunday(new Date());
  const new1 = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 7 * week
  );
  let year = new1.getFullYear();
  let month = (1 + new1.getMonth()).toString().padStart(2, '0');
  let day = new1.getDate().toString().padStart(2, '0');
  return year + '-' + month + '-' + day;
};

export const getWeekSaturdayDate = (week: number) => {
  const now = getLastSunday(new Date());
  const new1 = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 7 * week + 6
  );
  let year = new1.getFullYear();
  let month = (1 + new1.getMonth()).toString().padStart(2, '0');
  let day = new1.getDate().toString().padStart(2, '0');
  console.log(year + '-' + month + '-' + day);
  return year + '-' + month + '-' + day;
};

function getLastSunday(date: Date) {
  const t = new Date(date);
  t.setDate(t.getDate() - t.getDay());
  return t;
}
