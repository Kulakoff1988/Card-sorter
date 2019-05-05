const   trip1 = {
    departure: `Moscow`,
    destination: `Praga`,
    seat: `78F`,
    transport_type: `plane`,
    flight_number: `DR45`,
    departure_point: `6`,
    transport_number: ``,
    baggage: `ticket counter 15`
},
trip2 = {
    departure: `Praga`,
    destination: `London`,
    seat: `23B`,
    transport_type: `plane`,
    flight_number: `GB789`,
    departure_point: `2`,
    transport_number: ``,
    baggage: `ticket counter 2`
},
trip3 = {
    departure: `London`,
    destination: `Paris`,
    seat: `40B`,
    transport_type: `plane`,
    flight_number: `FR32`,
    departure_point: `5`,
    transport_number: ``,
    baggage: `ticket counter 2`
},
trip4 = {
    departure: `Paris`,
    destination: `Madrid`,
    carriage: `10`,
    seat: `33`,
    transport_type: `train`,
    departure_point: `4`,
    transport_number: `115`,
    baggage: ``
},
trip5 = {
    departure: `Madrid`,
    destination: `Barcelona`,
    seat: `12`,
    transport_type: `bus`,
    departure_point: `5`,
    transport_number: `445V`,
    baggage: `ticket counter 2`
};

const transportDictionary = (trip) => {
  switch(trip.transport_type) {
    case `plane`:
      return `From ${trip.departure}, take flight ${trip.flight_number} to ${trip.destination}. Gate ${trip.departure_point}, seat ${trip.seat}. Baggage drop at ${trip.baggage}`;
    case `train`:
      return `Take train ${trip.transport_number} from ${trip.departure} to ${trip.destination}. Carriage ${trip.carriage}, seat ${trip.seat}.`;
    case `bus`:
      return `Take the bus from ${trip.departure} to ${trip.destination}, bus number ${trip.transport_number}${trip.seat ? `, seat ${trip.seat}.` : `. No seat assignment.`} Baggage drop at ${trip.baggage}`;
  }
};

const tripToSort = (list, nextTrip, acc = []) => {
  acc.push(nextTrip);
  if (acc.length !== list.length) {
    const newNextTrip = list.find(trip => trip.departure === nextTrip.destination);
    return tripToSort(list, newNextTrip, acc);
  }
  return acc;
};
  
const tripCardSorter = (tripList) => {
  const startTrip = tripList.find(trip_find => !tripList.some(trip_some => trip_some.destination === trip_find.departure));

  const sortedTripList = tripToSort(tripList, startTrip);

  const resultString = sortedTripList.map((trip, index) => {
    return `${index + 1}. ${transportDictionary(trip)}`;
  });

  return resultString.join(`\n`);
};

//Some tests for tripCardSorter

const tripList1 = [trip3, trip5, trip1, trip4, trip2];
const testResult1 = '1. From Moscow, take flight DR45 to Praga. Gate 6, seat 78F. Baggage drop at ticket counter 15\n2. From Praga, take flight GB789 to London. Gate 2, seat 23B. Baggage drop at ticket counter 14\n3. From London, take flight FR32 to Paris. Gate 5, seat 40B. Baggage drop at ticket counter 2\n4. Take train 115 from Paris to Madrid. Carriage 10, seat 33.\n5. Take the bus from Madrid to Barcelona, bus number 445V, seat 12. Baggage drop at ticket counter 3.'

const trip6 = {
    departure: `Barcelona`,
    destination: `Paris`,
    carriage: `10`,
    seat: `33`,
    transport_type: `train`,
    departure_point: `4`,
    transport_number: `115`,
    baggage: ``
},
trip7 = {
    departure: `Madrid`,
    destination: `Barcelona`,
    seat: `12`,
    transport_type: `bus`,
    departure_point: `5`,
    transport_number: `445V`,
    baggage: `ticket counter 3`
};

const tripList2 = [trip6, trip7];
const testResult2 = `1. Take the bus from Madrid to Barcelona, bus number 445V, seat 12. Baggage drop at ticket counter 3.\n2. Take train 115 from Barcelona to Paris. Carriage 10, seat 33.`;

const trip8 = {
    departure: `Praga`,
    destination: `London`,
    seat: `23B`,
    transport_type: `plane`,
    flight_number: `GB789`,
    departure_point: `2`,
    transport_number: ``,
    baggage: `ticket counter 14`
},
trip9 = {
    departure: `London`,
    destination: `Paris`,
    seat: `40B`,
    transport_type: `plane`,
    flight_number: `FR32`,
    departure_point: `5`,
    transport_number: ``,
    baggage: `ticket counter 2`
},
trip10 = {
    departure: `Paris`,
    destination: `Madrid`,
    carriage: `10`,
    seat: `33`,
    transport_type: `train`,
    departure_point: `4`,
    transport_number: `115`,
    baggage: ``
};

const tripList3 = [trip10, trip9, trip8];
const testResult3 = `1. From Praga, take flight GB789 to London. Gate 2, seat 23B. Baggage drop at ticket counter 14\n2. From London, take flight FR32 to Paris. Gate 5, seat 40B. Baggage drop at ticket counter 2\n3. Take train 115 from Paris to Madrid. Carriage 10, seat 33.`;


const tripCardSorterTester = (list, expectingResult) => {
  return tripCardSorter(list) === expectingResult ? `Test success` : `Test failed`;
}

tripCardSorterTester(tripList2, testResult2);