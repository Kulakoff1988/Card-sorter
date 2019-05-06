import { tripCardSorter } from './tripCardSorter';
import { TripCardSorter } from './tripCardSorterAsClass';

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
},
trip6 = {
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

const tripList1 = [trip3, trip5, trip1, trip4, trip2];
const testResult1 = '1. From Moscow, take flight DR45 to Praga. Gate 6, seat 78F. Baggage drop at ticket counter 15\n2. From Praga, take flight GB789 to London. Gate 2, seat 23B. Baggage drop at ticket counter 2\n3. From London, take flight FR32 to Paris. Gate 5, seat 40B. Baggage drop at ticket counter 2\n4. Take train 115 from Paris to Madrid. Carriage 10, seat 33.\n5. Take the bus from Madrid to Barcelona, bus number 445V, seat 12. Baggage drop at ticket counter 2';

const tripList2 = [trip6, trip7];
const testResult2 = `1. Take the bus from Madrid to Barcelona, bus number 445V, seat 12. Baggage drop at ticket counter 3\n2. Take train 115 from Barcelona to Paris. Carriage 10, seat 33.`;

const tripList3 = [trip4, trip3, trip2];
const testResult3 = `1. From Praga, take flight GB789 to London. Gate 2, seat 23B. Baggage drop at ticket counter 2\n2. From London, take flight FR32 to Paris. Gate 5, seat 40B. Baggage drop at ticket counter 2\n3. Take train 115 from Paris to Madrid. Carriage 10, seat 33.`;

const commonTestList = [tripList1, tripList2, tripList3];
const commonTestResult = [testResult1, testResult2, testResult3]

const tripCardSorterTester = (list, expectingResult) => {
    return tripCardSorter(list) === expectingResult ? `Test success` : `Test failed`;
}

const tripSorter = new TripCardSorter;
const tripCardSorterClassTester = (list, expectingResult) => {
    console.log(tripSorter.transformListToString(list) === expectingResult ? `Test success` : `Test failed`);
}

for (let i = 0; i < commonTestList.length; i ++) {
    tripCardSorterTester(commonTestList[i], commonTestResult[i]);
    tripCardSorterClassTester(commonTestList[i], commonTestResult[i]);
}