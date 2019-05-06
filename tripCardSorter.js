const getTripDescription = (trip) => {
  switch(trip.transport_type) {
    case `plane`:
      return `From ${trip.departure}, take flight ${trip.flight_number} to ${trip.destination}. Gate ${trip.departure_point}, seat ${trip.seat}. Baggage drop at ${trip.baggage}`;
    case `train`:
      return `Take train ${trip.transport_number} from ${trip.departure} to ${trip.destination}. Carriage ${trip.carriage}, seat ${trip.seat}.`;
    case `bus`:
      return `Take the bus from ${trip.departure} to ${trip.destination}, bus number ${trip.transport_number}${trip.seat ? `, seat ${trip.seat}.` : `. No seat assignment.`} Baggage drop at ${trip.baggage}`;
  }
};

const getSortedList = (list, nextTrip, acc = []) => {
  acc.push(nextTrip);
  if (acc.length !== list.length) {
    const newNextTrip = list.find(trip => trip.departure === nextTrip.destination);
    return getSortedList(list, newNextTrip, acc);
  }
  return acc;
};
  
const tripCardSorter = (tripList) => {
  const startTrip = tripList.find(trip_find => !tripList.some(trip_some => trip_some.destination === trip_find.departure));

  const sortedTripList = getSortedList(tripList, startTrip);

  const resultString = sortedTripList.map((trip, index) => {
    return `${index + 1}. ${getTripDescription(trip)}`;
  });

  return resultString.join(`\n`);
};

export { tripCardSorter };