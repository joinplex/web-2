function check()
{
    var object = document.forms.tb;
    a = object.elements.st1.value;
    b = object.elements.st2.value;
    c = object.elements.st3.value;
    if (a == "") {
        alert("�� ������� ������ �������!" + '\n' + '������ ��������� ������?');
    }
    else if (b == "") {
        alert("�� ������� ������ �������!" + '\n' + '������ ��������� ������?');
    }
    else if (c == "") {
        alert("�� ������� ������ �������!" + '\n' + '������ ��������� ������?');
    }
    else if ((isNaN(a)) || (a <= 0)) {
        alert("�� ��������� ������� ������ �������!" + '\n' + '������ ��������� ������?');
    }
    else if ((isNaN(b)) || (b <= 0)) {
        alert("�� ��������� ������� ������ �������!" + '\n' + '������ ��������� ������?');
    }
    else if ((isNaN(c)) || (c <= 0)) {
        alert("�� ��������� ������� ������ �������!" + '\n' + '������ ��������� ������?');
    }
    else {
        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);
        if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) {
            var p = (a + b + c) / 2;
            var s = (p * (p - a) * (p - b) * (p - c))**0.5;
            alert('����������� ����������!' + '\n' + '������� ������������: ' + s);
        }
        else {
            alert("������ ������������ �� ����������!");
        }
    }
}