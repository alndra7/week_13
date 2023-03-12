# week_13

### Вопросы 💎

1. Как создать дату 24 января 2021 года, 22 часа 51 минута? Временная зона — местная.

let date = new Date(2021, 0, 24, 22, 51); console.log(date);

2. Для чего предназначен метод `getDay()`?

вернёт день недели от 0 (воскресенье) до 6 (суббота).

3. Как посчитать, сколько секунд осталось до завтра?

let now = new Date(); let hour = now.getHours(); let minutes = now.getMinutes(); let seconds = now.getSeconds(); let totalSecondsToday = (hour _ 60 + minutes) _ 60 + seconds; let totalSecondsInADay = 86400;

let secondsLeft = totalSecondsInADay - totalSecondsToday; console.log(secondsLeft);

4. Для чего предназначен метод `getDate()`?

чтобы получить день месяца, от 1 до 31

5. Что выведет `console.log(d)` ?

   ```jsx
   let d = new Date(2016, 2, 9);

   console.log(d);
   ```

Wed Mar 09 2016 00:00:00 GMT+0300

6. Что делает `getTimezoneOffset()` ?

возвращает разницу в минутах между местным часовым поясом и UTC

7. Что выведет консоль?

   ```jsx
   let date = new Date();

   console.log(date.getUTCHours());
   ```

текущее время в часах по GMT+0

8. Для чего предназначен метод `getHours()` объекта Date?

получение времени в часах

9. Что выведет консоль?

   ```jsx
   let d = new Date();
   let y = d.getFullYear();
   console.log(y);
   ```

текущий год

10. В чём ошибка в коде? let y = new Date(); let d = y.getDate(); console.log(d);

некорректные названия переменных или можно сократить код до console.log(y.getDate()) без объявления дополнительной переменной
