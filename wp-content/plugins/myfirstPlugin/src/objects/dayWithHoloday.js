const dayWithHoliday = async () => {

  async function getHolidays() {
    const response = await fetch('https://holidays-jp.github.io/api/v1/date.json');
    const holidays = await response.json();
    return holidays;
  }

  function getDateRangeArray(startDate, endDate) {
    const dateArray = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dateArray;
  }

  async function getOneWeekDatesWithHolidays() {
    const today = new Date();
    const sixDaysLater = new Date(today);
    sixDaysLater.setDate(today.getDate() + 6);

    const oneWeekDates = getDateRangeArray(today, sixDaysLater);

    // Get the holidays
    const holidays = await getHolidays();

    // Create an array of dates with holidays data included
    const oneWeekDatesWithHolidays = oneWeekDates.map(date => {

      const weekDays = ["日", "月", "火", "水", "木", "金", "土"];
      const dayOfWeek = weekDays[date.getDay()];
      const formattedDate = `${String(date.getMonth() + 1)}月${String(date.getDate())}日(${dayOfWeek})`;
      return {
        date: formattedDate,
        isHoliday: !!holidays[formattedDate],  // this will be true if the date is a holiday, otherwise false
        holidayName: holidays[formattedDate] || null,  // this will have the holiday name if the date is a holiday, otherwise null
        isSaturday: date.getDay() === 6,
        isSunday: date.getDay() === 0,
      };
    });
    console.log(date);
    return oneWeekDatesWithHolidays;
  }

  return await getOneWeekDatesWithHolidays();
}

export default dayWithHoliday;