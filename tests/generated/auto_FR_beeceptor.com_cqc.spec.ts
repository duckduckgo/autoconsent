import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_beeceptor.com_cqc', ['https://beeceptor.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
