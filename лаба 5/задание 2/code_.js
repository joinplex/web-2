function check()
{
    var object = document.forms.tb;
    a = object.elements.st1.value;
    b = object.elements.st2.value;
    c = object.elements.st3.value;
    if (a == "") {
        alert("Не введена первая сторона!" + '\n' + 'Хотите проверить данные?');
    }
    else if (b == "") {
        alert("Не введена вторая сторона!" + '\n' + 'Хотите проверить данные?');
    }
    else if (c == "") {
        alert("Не введена третья сторона!" + '\n' + 'Хотите проверить данные?');
    }
    else if ((isNaN(a)) || (a <= 0)) {
        alert("Не правильно введена первая сторона!" + '\n' + 'Хотите проверить данные?');
    }
    else if ((isNaN(b)) || (b <= 0)) {
        alert("Не правильно введена вторая сторона!" + '\n' + 'Хотите проверить данные?');
    }
    else if ((isNaN(c)) || (c <= 0)) {
        alert("Не правильно введена третья сторона!" + '\n' + 'Хотите проверить данные?');
    }
    else {
        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);
        if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) {
            var p = (a + b + c) / 2;
            var s = (p * (p - a) * (p - b) * (p - c))**0.5;
            alert('Треугольник существует!' + '\n' + 'Площадь треугольника: ' + s);
        }
        else {
            alert("Такого треугольника не существует!");
        }
    }
}