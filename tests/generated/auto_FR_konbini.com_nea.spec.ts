import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_konbini.com_nea', ['https://www.konbini.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
