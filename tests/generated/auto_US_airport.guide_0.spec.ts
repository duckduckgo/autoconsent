import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_airport.guide_0', ['https://www.airport.guide/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
