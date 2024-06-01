// Choose name
do {
  chooseYourName = prompt("Напишіть ім'я вашого персонажа:");
} while (!chooseYourName);

alert(`Вітаємо вас, ${chooseYourName}`);
alert("Ви попали в гру /Game Name/. Для початку прокачайте свого героя:");

// Upgrade points
let availablePoints = 10;
let stamina = 0;
let strength = 0;
let intelligence = 0;

// Stamina upgrade
let upgradeStamina = parseFloat(
  prompt(
    "Виберіть скільки очків прокачки ви хочете віддати стаміні (У вас є 10 очків прокачки)"
  )
);
stamina = upgradeStamina + stamina;
availablePoints = availablePoints - upgradeStamina;

alert(
  `У вас тепер ${stamina} очків в стаміні. У вас залишилось ${availablePoints} вільних очків`
);

// Strenght Upgrade
let upgradeStrenght = parseFloat(
  prompt(
    `Виберіть скільки очків прокачки ви хочете віддати силі (У вас є ${availablePoints} очків прокачки)`
  )
);
strength = upgradeStrenght + strenght;
availablePoints = availablePoints - upgradeStrenght;

alert(
  `У вас тепер ${strength} очків в силі. У вас залишилось ${availablePoints} вільних очків`
);

// Intelligence Upgrade
let upgradeIntelligence = parseFloat(
  prompt(
    `Виберіть скільки очків прокачки ви хочете віддати інтелекту (У вас є ${availablePoints} очків прокачки)`
  )
);
strength = upgradeIntelligence + intelligence;
availablePoints = availablePoints - upgradeIntelligence;

alert(
  `У вас тепер ${intelligence} очків в інтелекті. У вас залишилось ${availablePoints} вільних очків`
);

// Introduction
alert(
  "Отже, ви попали на дикий захід. Ваш персонаж був в дорозі кілька днів, і дібрався до попутного села аж під ніч."
);
alert(
  ` Він зайшов в місцевий салун (далі бар). При вході до якого висіла табличка "Вільні Кімнати", і ви вирішили перепочити там.`
);
let barEntrance = prompt(
  "Ви зайшли в бар, оглядаєте його, бачите як двоє ковбоїв б'ютсья між собою. Приєднаєтесь до них чи ні? (Так/Ні)"
).toLowerCase();
if (barEntrance === "так") {
  if (strenght >= 5) {
    alert("Ви побили ковбоїв, так як були сильнішими ніж вони!");
  } else {
    alert("Ковбої побили вас, і ви, обессилені, були викинуті з бару.");
  }
  if (intelligence >= 5) {
    alert(
      "Ви хотіли підійти до них, але так як ви занадто розумний, то ви просто пройшли повз"
    );
  } else {
    alert("Ковбої побили вас, і ви, обессилені, були викинуті з бару.");
  }
} else {
  alert("Ви пройшли повз.");
}
// Barman dialogue
alert(
  "Ви підійшли до привітливого бармена. Він вам пропонує, щось купити і показує на таблцю яка висить зверху, на якій пише меню"
);

while (true) {
  let barBuy = prompt(
    "Що ви купите? (Пиво/Стейк/Віскі/Запитати де можна переночувати)"
  );

  if (barBuy) {
    barBuy = barBuy.toLowerCase();

    if (barBuy === "віскі") {
      alert(
        "Ви випили пару чарок віскі і сильно оп'яніли і вас викинули з бару. Ви програли."
      );
      break;
    } else if (barBuy === "стейк") {
      alert("Ви добре перекусили стейком.");
    } else if (barBuy === "пиво") {
      alert("Ви стали трохи веселішими після пива.");
    } else if (barBuy === "запитати де можна переночувати") {
      alert("Бармен продав вам ключ від кімнати.");
      break;
    } else {
      alert(
        "Ви не вибрали варіант з списку, перевірте чи правильно ви написали свою відповідь і відправте її знову."
      );
    }
  } else {
    alert("Ви нічого не вибрали.");
  }
}
// bedroom
alert(
  "Ви взяли ключ у бармена, і пішли вверх на поверх з кімнатами. Знайшовши двері які підходять ви вставили ключ і провернули його."
);
alert(
  "Зайшовши в кімнату ви повісили свою рушницю і оглянувшись кинулись спати."
);
