import generateCMPTests from '../playwright/runner';

generateCMPTests('milestone-cookiebanner', [
    'https://www.tumblingriver.com/#about',
    'https://www.travelyosemite.com/',
    'https://www.parkhotelmadison.com/',
    'https://www.coppergrouse.com/',
]);
