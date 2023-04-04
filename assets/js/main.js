const h1 = document.querySelector('.container h1');
const date = new Date();

function getDayWeekString(dayWeek) {
    let dayWeekString;

    switch (dayWeek) {
        case 0:
            dayWeekString = 'Domingo';
            return dayWeekString;
        case 1:
            dayWeekString = 'Segunda-feira';
            return dayWeekString;
        case 2:
            dayWeekString = 'Terça-feira';
            return dayWeekString;
        case 3:
            dayWeekString = 'Quarta-feira';
            return dayWeekString;
        case 4:
            dayWeekString = 'Quinta-feira';
            return dayWeekString;
        case 5:
            dayWeekString = 'Sexta-feira';
            return dayWeekString;
        case 6:
            dayWeekString = 'Sábado';
            return dayWeekString;
        default:
            dayWeekString = 'Data Inválida'
            return dayWeekString;
    }

}

function getMonthString(monthNumber) {
    let monthString;

    switch (monthNumber) {
        case 0:
            monthString = 'Janeiro';
            return monthString;
        case 1:
            monthString = 'Fevereiro';
            return monthString;
        case 2:
            monthString = 'Março';
            return monthString;
        case 3:
            monthString = 'Abril';
            return monthString;
        case 4:
            monthString = 'Maio';
            return monthString;
        case 5:
            monthString = 'Junho';
            return monthString;
        case 6:
            monthString = 'Julho';
            return monthString;
        case 7:
            monthString = 'Agosto';
            return monthString;
        case 8:
            monthString = 'Setembro';
            return monthString;
        case 9:
            monthString = 'Outubro';
            return monthString;
        case 10:
            monthString = 'Novembro';
            return monthString;
        case 11:
            monthString = 'Dezembro';
            return monthString; F
        default:
            monthString = 'Data Inválida'
            return monthString;
    }

}

function createDate(data){
    const dayWeek_ = data.getDay();
    const monthNumber_ = data.getMonth();
    const dayName_ = getDayWeekString(dayWeek_);
    const monthName_ = getMonthString(monthNumber_);

    return `${dayName_}, ${dayWeek_} de ${monthName_} de ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}h`
}

h1.innerHTML = createDate(date);
