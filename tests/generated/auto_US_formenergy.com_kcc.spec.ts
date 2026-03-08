import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_formenergy.com_kcc', ['https://formenergy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
