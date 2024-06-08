// Choose name
do {
  chooseYourName = prompt("Напишіть ім'я вашого персонажа:");
} while (!chooseYourName);

alert(`Вітаємо вас, ${chooseYourName}`);
alert("Ви попали в гру /Game Name/.");

// Inventory and money
alert(
  "У вас є початкові речі в інвентарю, вони не дуже сильні і радимо вам прокачувати їх."
);
alert(
  "Також у вас є початковий баланс, ці гроші ви зможете тратити і заробляти впродовж гри."
);
let inventory = ["Стара рушниця", "8 патронів до рушниці"];
let money = 1100;
alert(`У вас в інвентрю є: ${inventory}`);
alert(`У вас на балансі доступно ${money}$`);

// Upgrade points
alert("Давайте прокачаємо вашого персонажа.");
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
strength = upgradeStrenght + strength;
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
intelligence = upgradeIntelligence + intelligence;
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
  if (strength >= 5) {
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
alert("Ви підійшли до привітливого бармена. Він зходу почав з вами діалог:");
alert("Бармен: Привіт, ковбой. Ти тут вперше? Я тебе ще не бачив тут.");
alert(`${chooseYourName}: Так, я тут проїздом, вирішив переночувати тут.`);
alert("Бармен: Ну що ж, будеш щось купляти?");
alert("*Бармен показав на тебличку з меню яке висіло зверху*");

while (true) {
  let barBuy = prompt(
    "Що ви купите? (Пиво/Стейк/Віскі/Запитати де можна переночувати)"
  );

  if (barBuy) {
    barBuy = barBuy.toLowerCase();

    if (barBuy === "віскі") {
      alert(`${chooseYourName}: Налий мені віскі.`);
      alert(
        "Ви випили пару чарок віскі і сильно оп'яніли і вас викинули з бару. Ви програли."
      );
      break;
    } else if (barBuy === "стейк") {
      alert(
        `${chooseYourName}: Я такий голодний, не відмовився б від смачного стейку. (-15$)`
      );
      alert("Ви добре перекусили стейком.");
      money -= 15;
      alert(`У вас лишилось на балансі ${money}$.`);
    } else if (barBuy === "пиво") {
      alert(`${chooseYourName}: Давай стаканчик пива. (-5$)`);
      alert("Ви стали трохи веселішими після пива.");
      money -= 5;
      alert(`У вас лишилось на балансі ${money}$.`);
    } else if (barBuy === "запитати де можна переночувати") {
      alert(
        `${chooseYourName}: Думаю відмовлюсь від цього всього. Чи не знаєш де тут можна переночувати?`
      );
      alert(
        `Бармен: Звичайно, на другому поверсі є спальні кімнати, 50 долларів за ключ.`
      );
      alert("Бармен продав вам ключ від кімнати.");
      money -= 50;
      alert(`У вас лишилось на балансі ${money}$.`);
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
  "Зайшовши в кімнату ви повісили свою рушницю і оглянувшись кинулись спати. "
);
// shop
alert(
  "На настпуний день ви покинули кімнату і бармен порадив вам заглянути в магазин по сусідству від бара."
);

let goToShop = prompt("Чи хочете ви їхати в магазин? (так/ні)").toLowerCase();

if (goToShop === "так") {
  alert("Ви поїхали в магазин і при вході ви побачили ");
  while (true) {
    let shopBuy = prompt(
      "Продавець: Привіт, бажаєш щось прикупити? (Рушниця(500$)/аптечка(50$)/вода(10$)/Піти"
    ).toLowerCase();
    if (shopBuy === "піти") {
      alert("Ви покинули магазин і продовжили свій шлях");
      break;
    } else if (shopBuy === "рушниця") {
      alert("Ви купили нову рушницю, вона точно вам пригодиться в подорожі.");
      money -= 500;
      alert(`У вас лишилось на балансі ${money}$.`);
      inventory.shift();
      inventory.unshift("Нова рушниця");
      alert("Тепер у вас в інвентарі:");
      alert(inventory);
    } else if (shopBuy === "аптечка") {
      alert(
        "Ви купили аптечку, вона вам зможе пригодитись, щоб надати першу допомогу собі або іншим."
      );
      money -= 50;
      alert(`У вас лишилось на балансі ${money}$.`);
      inventory.push("Аптечка");
      alert("Тепер у вас в інвентарі:");
      alert(inventory);
    } else if (shopBuy === "вода") {
      alert(
        "Ви купили бутилку води, корисна річ, враховуючи, що ми в пустельній місцевості."
      );
      money -= 10;
      alert(`У вас лишилось на балансі ${money}$.`);
      inventory.push("Бутилка води");
      alert("Тепер у вас в інвентарі:");
      alert(inventory);
    }
  }
} else {
  alert("Ви продовжили свій шлях не поїхавши в магазин.");
}

alert("Кінець.");
