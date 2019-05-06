# Tripcard-sorter

API для преобразования списка карточек путешетсвенника в последовательный список путешествий с указанием всей информации о путешествии.

API представлен классом `TripCardSorter`, в котором есть основной метод `transformListToString`, принимающий на вход в качестве единственного параметра массив `[]` объектов js `{}`. Ключи этих объектов - это параметры путешествия, значения к этим ключам - конкретные значения параметров, например:
```
{
    departure: `Praga`,
    destination: `London`,
    seat: `23B`,
    transport_type: `plane`,
    flight_number: `GB789`,
    departure_point: `2`,
    transport_number: ``,
    baggage: `ticket counter 2`
},
{
    departure: `Paris`,
    destination: `Madrid`,
    carriage: `10`,
    seat: `33`,
    transport_type: `train`,
    departure_point: `4`,
    transport_number: `115`,
},
{
    departure: `Madrid`,
    destination: `Barcelona`,
    seat: `12`,
    transport_type: `bus`,
    departure_point: `5`,
    transport_number: `445V`,
    baggage: `ticket counter 2`
}
   ```
Поля "departure" и "destination" обязательны, т.к. они определяют сортировку.
Сервис возвращает строку с разделителем `\n` после каждого путушествия.

Использование метода:

```
const   trip1 = {
    departure: `Praga`,
    destination: `London`,
    seat: `23B`,
    transport_type: `plane`,
    flight_number: `GB789`,
    departure_point: `2`,
    transport_number: ``,
    baggage: `ticket counter 2`
},
trip2 = {
    departure: `London`,
    destination: `Paris`,
    seat: `40B`,
    transport_type: `plane`,
    flight_number: `FR32`,
    departure_point: `5`,
    transport_number: ``,
    baggage: `ticket counter 2`
},
trip3 = {
    departure: `Paris`,
    destination: `Madrid`,
    carriage: `10`,
    seat: `33`,
    transport_type: `train`,
    departure_point: `4`,
    transport_number: `115`,
    baggage: ``
}

const tripList = [trip3, trip1, trip2];

const tripSorter = new TripCardSorter;
tripSorter.transformListToString(tripList);

// => ` 1. From Praga, take flight GB789 to London. Gate 2, seat 23B. Baggage drop at ticket counter 2
        2. From London, take flight FR32 to Paris. Gate 5, seat 40B. Baggage drop at ticket counter 2
        3. Take train 115 from Paris to Madrid. Carriage 10, seat 33.`
```
В модуле tests.js находятся тесты, для их запуска нужно в командной строке набрать `node tests`, находясь в папке с этим модулем, например:

```
C:\Projects\Tripcard-sorter>node tests
Test class 1 success
Test class 2 success
Test class 3 success
```