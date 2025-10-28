import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_eforms.com_weg', ['https://eforms.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
