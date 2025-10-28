import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_imarabe.org_hkw', ['https://www.imarabe.org/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
