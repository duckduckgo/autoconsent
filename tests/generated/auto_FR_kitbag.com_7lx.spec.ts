import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_kitbag.com_7lx', ['https://www.kitbag.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
