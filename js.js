// 1.Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
let digitCompare= function(a, b){
    if (a<b){
        return -1
    }
    else if(a>b){
        return 1
    }
    else{
        return 0
    }
}
console.log (digitCompare(1, 3));

// 2.Написать функцию, которая вычисляет факториал переданного ей числа.
let factorial = function(n){
    if(n==1){
        return 1
    }
    else{
        return n*factorial(n-1)
    }
}
let number_2 = prompt("Enter the number");
console.log("!"+number_2+" = "+factorial(number_2));

// 3.Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
let numberCombination=function(a_3, b_3, c_3){
    let compareNumber=a_3+b_3+c_3;
    return +compareNumber
}
let digitToCombination_1 = prompt ("Enter the first number");
let digitToCombination_2 = prompt ("Enter the second number");
let digitToCombination_3 = prompt ("Enter the third number");
console.log(numberCombination(digitToCombination_1, digitToCombination_2, digitToCombination_3));

// 4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
let areaCalculation = function(a_4, b_4){
    if(b_4==undefined){
        return a_4*a_4 
    }
    else{
        return a_4*b_4
    }
}
console.log (areaCalculation(3));

// 5.Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
let checkNumberPerfect=function(a_5){
    let sum_5=0;
    for(let i=1; i<a_5;i++){
        if(a_5%i==0){
            sum_5=sum_5+i
        }
    }
    if(a_5==sum_5){
        return "Perfect number"
    }
    else{
        return "Not perfect number"
    }
}
console.log(checkNumberPerfect(20));

// 6.Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
let determinePerfectRangeNumbers =function(a_6, b_6){
    for(let i_6=a_6+1; i_6<b_6; i_6++){
     if(checkNumberPerfect(i_6)==="Perfect number"){
         return i_6 +" "
     }
    }
}
console.log(determinePerfectRangeNumbers(1,7));

// 7.Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
let showTime = function(h, m, s){
    if(m==undefined && s==undefined){
        return h+":"+"00"+":"+"00"
    } 
    if(s==undefined){
        return h+":"+m+":"+"00"
    } 
    return h+":"+m+":"+s;
}
document.write(showTime(3));

// 8.Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
const secondsInMinut = 60;
const secondsInHour=60*secondsInMinut;
let recountTimeInSeconds = function(h_8, m_8, s_8){
    return h_8*secondsInHour+m_8*secondsInMinut+s_8
}
console.log (recountTimeInSeconds(3,15,20)+" seconds");

// 9.Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
// 
let recountTimeFromSeconds = function(s_9){
    let hours = Math.trunc(s_9/secondsInHour);
    let minutes=Math.trunc(s_9/secondsInMinut)-hours*secondsInMinut;
    let seconds=s_9-hours*secondsInHour-minutes*secondsInMinut;
    return showTime (hours,minutes, seconds)
}
console.log(recountTimeFromSeconds(11720));

// 10.Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
let differenceBetweenDates = function(hour1, minute1, second1, hour2, minute2, second2){
    let firstdateSeconds=recountTimeInSeconds(hour1, minute1, second1);
    let secondDateSeconds=recountTimeInSeconds(hour2,minute2, second2);
    let diferenceInSeconds=secondDateSeconds-firstdateSeconds;
    return recountTimeFromSeconds(diferenceInSeconds)
}

console.log (differenceBetweenDates(1,20,15,3,40,30));