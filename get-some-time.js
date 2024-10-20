function firstDayWeek(numberWeek, stringYear) {

    if (numberWeek == 1){
        return "01-01-"+stringYear
    }

    let date = new Date(stringYear);

    let firstMonday = new Date(
        date.getTime() + (numberWeek - 1) * 7 * 24 * 60 * 60 * 1000
    );

    while (firstMonday.getDay() !== 1) {
      firstMonday.setDate(firstMonday.getDate() - 1);
    }
    return formatDate(firstMonday);
  }

  function formatDate(d) {
    return d.toISOString().slice(0, 10).split("-").reverse().join("-");
  }
console.log(firstDayWeek(52, '1000'));
