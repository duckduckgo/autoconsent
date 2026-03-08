import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.cpost.org_d4o', ['https://fr.cpost.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
