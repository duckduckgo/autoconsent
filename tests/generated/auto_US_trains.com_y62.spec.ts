import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_trains.com_y62', ['https://www.trains.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
