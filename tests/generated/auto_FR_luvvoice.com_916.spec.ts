import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_luvvoice.com_916', ['https://luvvoice.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
