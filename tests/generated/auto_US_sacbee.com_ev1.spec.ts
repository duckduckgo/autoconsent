import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sacbee.com_ev1', ['https://www.sacbee.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
