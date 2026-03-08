import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_afac24.com_n6v', ['https://afac24.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
