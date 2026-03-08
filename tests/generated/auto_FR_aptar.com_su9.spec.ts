import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aptar.com_su9', ['https://aptar.com/en-us'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
