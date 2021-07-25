const date = new Date();

const renderCalendar = (month) => {
    const monthDays = document.querySelector('.days');
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); //specifying the day as 0 gives you the last day of the current month 
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    date.setDate(1);
    const firstDayOfMonth = date.getDay();
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7-lastDayOfMonth-1;

    const months = moment.months();

    document.querySelector('.date h1').innerHTML = months[month];
    document.querySelector('.date p').innerHTML = new Date().toDateString();

    let days = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
        days += `<div class="prev-date">${prevLastDay - i + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (moment().date() === i && month === moment().month()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }   
    }

    for (let i = 1; i <= nextDays; i++) {
        days += `<div class="next-date">${i}</div>`;  
    }
    monthDays.innerHTML = days;
};

renderCalendar(moment().month());

document.querySelector('.prev').addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar(moment().month() - 1);
})
document.querySelector('.next').addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar(moment().month() + 1);
})