function check() {

    var today = new Date();
    var day = today.getDay();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var p = "AM";
    switch (day) {
        case 0: day = "�����������"; break;
        case 1: day = "�����������"; break;
        case 2: day = "�������"; break;
        case 3: day = "�����"; break;
        case 4: day = "�������"; break;
        case 5: day = "�������"; break;
        case 6: day = "�������"; break;
    }
    if (hour > 12) {
        p = "PM";
        hour -= 12;
    }
    console.log("�������: " + day + "\n������� �����: " + hour + " " + p + " : " + minute + " : " + second);
}