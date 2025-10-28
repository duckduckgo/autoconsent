import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sancy.com_ox3', ['https://www.sancy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
