import generateCMPTests from '../playwright/runner';

const urls = [
    'https://www.handelsbanken.se/',
    'https://www.handelsbanken.co.uk/',
    'https://www.handelsbanken.nl/',
    'https://www.handelsbanken.fi/',
    'https://www.handelsbanken.no/',
];

generateCMPTests('handelsbanken', urls);
