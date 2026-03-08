import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_autorigin.com_oc8', ['https://autorigin.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
