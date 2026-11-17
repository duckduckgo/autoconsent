import generateCMPTests from '../playwright/runner';

generateCMPTests('bdirect-booking-engine', [
    'https://bookings.shibaparkhotel.com/',
    'https://bookings.glamdaystyle.jp/',
    'https://bookings.kafuu-okinawa.jp/',
    'https://bookings.islandnagasaki.jp/',
    'https://bookings.aquasense.jp/',
]);
