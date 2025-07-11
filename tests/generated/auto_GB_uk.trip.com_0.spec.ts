import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.trip.com_0', ['https://uk.trip.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
