import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sacbee.com_fpe', ['https://www.sacbee.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
