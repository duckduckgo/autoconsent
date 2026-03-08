import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ettic.org_z69', ['https://ettic.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
