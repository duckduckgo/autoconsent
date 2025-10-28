import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eduforge.org_o22', ['https://eduforge.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
