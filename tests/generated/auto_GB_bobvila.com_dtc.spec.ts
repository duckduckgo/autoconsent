import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bobvila.com_dtc', ['https://www.bobvila.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
