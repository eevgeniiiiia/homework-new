/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
    let newString = str.split(' ');

    for(let i = 0; i < newString.length; i++) {
        if(newString[i].length > 0) {
            const first = newString[i][0].toUpperCase();
            const second = newString[i].slice(1)
            newString[i] = first + second;
        }
    }
    return newString.join(' ');
}
