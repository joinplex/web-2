function check() {

    var today = new Date();
    var day = today.getDay();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var p = "AM";
    switch (day) {
        case 0: day = "Воскресенье"; break;
        case 1: day = "Понедельник"; break;
        case 2: day = "Вторник"; break;
        case 3: day = "Среда"; break;
        case 4: day = "Четверг"; break;
        case 5: day = "Пятница"; break;
        case 6: day = "Суббота"; break;
    }
    if (hour > 12) {
        p = "PM";
        hour -= 12;
    }
    console.log("Сегодня: " + day + "\nТекущее время: " + hour + " " + p + " : " + minute + " : " + second);
}