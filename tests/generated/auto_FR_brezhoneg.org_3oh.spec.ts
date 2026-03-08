import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_brezhoneg.org_3oh', ['https://brezhoneg.org/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
