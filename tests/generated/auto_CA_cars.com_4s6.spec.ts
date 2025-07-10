import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cars.com_4s6', ['https://www.cars.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
