import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_imarabe.org_iu1', ['https://www.imarabe.org/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
