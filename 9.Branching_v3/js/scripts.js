'use strict';
const yearOfBirth = prompt('Ваш год рождения?');
let userCity = null;
let country = null;
let kindOfSport = null;
let hobby = null;
switch (yearOfBirth && yearOfBirth.trim() && isNaN(+yearOfBirth)) {
    case null:
    case '':
    case isNaN():
        alert('Жаль что ты стесняешся своего возраста');
        break;
    default:
        userCity = prompt('В каком городе ты живешь?');
        if (userCity === 'Киев' || userCity === 'Kiev') {
            country = 'Ты живешь в столице Украины'
        } else if (userCity === 'Прага' || userCity === 'Praha') {
            country = 'Ты живешь в столице Чехии'
        } else if (userCity === 'Берлин' || userCity === 'Berlin') {
            country = 'Ты живешь в столице Германии'
        } else {
            country = `Ты живешь в городе: ${userCity}`
        }
        switch (userCity && userCity.trim()) {
            case '':
            case null:
                alert('А вдруг ты под санкциями?');
                break;
            default:
                kindOfSport = prompt('Твой любимый вид спорта?');
                if (kindOfSport === 'Футбол') {
                    hobby = 'Круто! Хочешь стать как Кантона?'
                } else if (kindOfSport === 'Дрифт') {
                    hobby = 'Круто! Хочешь стать как Джеймс Дин?'
                } else if (kindOfSport === 'Бокс') {
                    hobby = 'Круто! Хочешь стать как Тайсон?'
                } else {
                    hobby = `Твой любимый спорт: ${kindOfSport}`
                }
                switch (kindOfSport && kindOfSport.trim()) {
                    case '':
                    case null:
                        alert('Спорт это хорошо!');
                        break;
                    default:
                        alert(`Твой возраст: ${2022 - yearOfBirth} \n${country} \n${hobby}`);
                }
        }
}










