/** @typedef (class) Класс для сортировки карточек путешественника.  
 *  @public (method) transformListToString - основной публичный метод, принимающий в качестве единственного параметра массив путешествий
 *  @param (array) transformListToString - массив путешествий. Каждое путешествие представлено в виде объекта JS {}
 *  @param (object) Ключи - это параметры путешествия, значения к этим ключам - конкретные значения параметров, например:
 *  {
        departure: `Moscow`,
        destination: `Praga`,
        seat: `78F`,
        transport_type: `plane`,
        flight_number: `DR45`,
        departure_point: `6`,
        transport_number: ``,
        baggage: `ticket counter 15`
    } 
 * Поля "departure" и "destination" обязательны, т.к. они определяют сортировку
 *  @return (string) transformListToString - cтрока с разделителем `\n` между путешествиями.
 */

class TripCardSorter {
    _getSortedList(tripList, nextTrip, acc = []) {
        acc.push(nextTrip);
        if (acc.length !== tripList.length) {
          const newNextTrip = tripList.find(trip => trip.departure === nextTrip.destination);
          return this._getSortedList(tripList, newNextTrip, acc);
        }
        return acc;
    }

    _getTripDescription(trip) {
        switch(trip.transport_type) {
            case `plane`:
              return `From ${trip.departure}, take flight ${trip.flight_number} to ${trip.destination}. Gate ${trip.departure_point}, seat ${trip.seat}. Baggage drop at ${trip.baggage}`;
            case `train`:
              return `Take train ${trip.transport_number} from ${trip.departure} to ${trip.destination}. Carriage ${trip.carriage}, seat ${trip.seat}.`;
            case `bus`:
              return `Take the bus from ${trip.departure} to ${trip.destination}, bus number ${trip.transport_number}${trip.seat ? `, seat ${trip.seat}.` : `. No seat assignment.`} Baggage drop at ${trip.baggage}`;
        }
    }

    transformListToString(tripList) {
        const startTrip = tripList.find(trip_find => !tripList.some(trip_some => trip_some.destination === trip_find.departure));
        const sortedTripList = this._getSortedList(tripList, startTrip);
        const resultString = sortedTripList.map((trip, index) => {
          return `${index + 1}. ${this._getTripDescription(trip)}`;
        });
        return resultString.join(`\n`);
    }
};

module.exports = TripCardSorter;