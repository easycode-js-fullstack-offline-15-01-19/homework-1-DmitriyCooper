// -------------------------- Home work 1 --------------------------
// -------------------------- Bondar Dmitriy --------------------------

// --------------------------Задачи. Строки.--------------------------


// 1. Получить первую и последнюю буквы строки

let string;
    string = 'some test string';
    string = string[0] + string[string.length - 1];  

console.log(string);

// 2. Сделать первую и последнюю буквы в верхнем регистре

let string; 
    string = 'some test string';
    string = string[0] + string[string.length - 1];

console.log(string.toUpperCase());

// 3. Найти положение слова ‘string’ в строке

let string = 'some test string';
    position = string.indexOf('string');

console.log(position);

// 4. Найти положение второго пробела (“вручную” ничего не считать)

let string = 'some test string';
    position = string.indexOf(' ', string.indexOf(' ') + 1);

console.log(position);

// 5. Получить строку с 5-го символа длиной 4 буквы

let string; 
    string = 'some test string';
    string = string.substr(5,4);

console.log(string);

// 6. Получить строку с 5-го по 9-й символы

let string;
    string = 'some test string';
    string = string.slice(5,9);

console.log(string);

// 7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

let string = 'some test string';
    newString = string.slice(0,-6);
     

console.log(newString);

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

let a = 20;
let b = 16;
let string = `${a}${b}`

console.log(string);


// --------------------------Задачи. Числа.--------------------------

// 1. Получить число pi из Math и округлить его до 2-х знаков после точки

let value = (Math.PI).toFixed(2);

console.log(value);

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

let a = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
    b = Math.min(15, 11, 16, 12, 51, 12, 13, 51);

console.log(a,b);

// 3. Работа с Math.random:
//      a. Получить случайное число и округлить его до двух цифр после запятой
//      b. Получить случайное целое число от 0 до X. X - любое произвольное число.

let a = +(Math.random()).toFixed(2);
let b = Math.round(Math.random()*100);

console.log(a,b);

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

let value = +(0.6 + 0.7).toFixed(2);

console.log(value);

// 5. Получить число из строки ‘100$’

let value = parseFloat('100$');

console.log(value);


// --------------------------Задачи. Объекты.--------------------------

// 1. Создать объект с полем product, равным ‘iphone’

let obj = {
    product: 'iphone'
};

// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’

    obj.price = '1000';
    obj.currency = 'dollar';

// 3. Добавить поле details, которое будет содержать объект с полями model и color

    obj.details = {
        model: '',
        color: ''
    };

console.log(obj);
