function check() {
    var students = ["���", "����", "�����", "������"];
    students["���"] = 37;
    students["����"] = 46;
    students["�����"] = 70;
    students["������"] = 88;
    var s_sr = 0;
    for (var i = 0; i < students.length; i++) {
        s_sr += students[students[i]];
        if (students[students[i]] < 60)
            students[students[i]] = "�������";
        else if (students[students[i]] < 70)
            students[students[i]] = "3"
            else if (students[students[i]] < 90)
                students[students[i]] = "4";
                else if (students[students[i]] <= 100)
                    students[students[i]] = "5";
    }
    s_sr /= 4;
    console.log(students[0] + " - " + students[students[0]] + "\n" + students[1] + " - " + students[students[1]] + "\n" + students[2] + " - " + students[students[2]] + "\n" + students[3] + " - " + students[students[3]] + "\n" + "������� ����� ������: " + s_sr);
}