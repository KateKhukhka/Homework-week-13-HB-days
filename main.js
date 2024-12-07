//основная кнопка
const mainButton = document.getElementById("mainButton");
//поле ввода даты
const inputDate = document.getElementById("inputDate");
//переменные для вариантов ответа
const wrongDate = document.querySelector(".wrongAnswer");
const birthdayDays = document.querySelector(".rightAnswer");

mainButton.addEventListener("click", function () {
  const yourDate = inputDate.value;

  //получение текущей даты
  const currentDate = Date.now();

  //перевод введенной даты в миллисекунды
  const yourDateInMilliseconds = Date.parse(yourDate);

  //проверка введенной даты рождения
  //если дата не введена или больше текущей даты
  if (
    inputDate.value === "" ||
    yourDateInMilliseconds > currentDate
  ) {
    wrongDate.textContent = `Дата не введена или введена неверно, пожалуйста, введите корректную дату`;
    birthdayDays.textContent = ``;
  }

  //если дата введена корректно,
  //вычисление оставшихся дней до дня рождения с использованием среднего значения количества дней в году
  else {
    const diffInMilliseconds =
      currentDate - yourDateInMilliseconds;
    const result = Math.ceil(
      365.25 - ((diffInMilliseconds / 86400000) % 365.25)
    );

    //условия для выполнения правильного склонения
    if (
      result === 1 ||
      result === 21 ||
      result === 31 ||
      result === 41 ||
      result === 51 ||
      result === 61 ||
      result === 71 ||
      result === 81 ||
      result === 91 ||
      result === 101 ||
      result === 121 ||
      result === 131 ||
      result === 141 ||
      result === 151 ||
      result === 161 ||
      result === 171 ||
      result === 181 ||
      result === 191 ||
      result === 201 ||
      result === 221 ||
      result === 231 ||
      result === 241 ||
      result === 251 ||
      result === 261 ||
      result === 271 ||
      result === 281 ||
      result === 291 ||
      result === 301 ||
      result === 321 ||
      result === 331 ||
      result === 341 ||
      result === 351 ||
      result === 361
    ) {
      birthdayDays.textContent = `До вашего дня рождения остался: ${result} день`;
    } else if (
      (result >= 5 && result < 21) ||
      (result >= 25 && result < 31) ||
      (result >= 35 && result < 41) ||
      (result >= 45 && result < 51) ||
      (result >= 55 && result < 61) ||
      (result >= 65 && result < 71) ||
      (result >= 75 && result < 81) ||
      (result >= 85 && result < 91) ||
      (result >= 95 && result < 101) ||
      (result >= 105 && result < 121) ||
      (result >= 125 && result < 131) ||
      (result >= 135 && result < 141) ||
      (result >= 145 && result < 151) ||
      (result >= 155 && result < 161) ||
      (result >= 165 && result < 171) ||
      (result >= 175 && result < 181) ||
      (result >= 185 && result < 191) ||
      (result >= 195 && result < 201) ||
      (result >= 205 && result < 221) ||
      (result >= 225 && result < 231) ||
      (result >= 235 && result < 241) ||
      (result >= 245 && result < 251) ||
      (result >= 255 && result < 261) ||
      (result >= 265 && result < 271) ||
      (result >= 275 && result < 281) ||
      (result >= 285 && result < 291) ||
      (result >= 295 && result < 301) ||
      (result >= 305 && result < 321) ||
      (result >= 325 && result < 331) ||
      (result >= 335 && result < 341) ||
      (result >= 345 && result < 351) ||
      (result >= 355 && result < 361) ||
      (result >= 365 && result < 367)
    ) {
      birthdayDays.textContent = `До вашего дня рождения осталось: ${result} дней`;
    } else {
      birthdayDays.textContent = `До вашего дня рождения осталось: ${result} дня`;
    }
    wrongDate.textContent = ``;
  }
});
