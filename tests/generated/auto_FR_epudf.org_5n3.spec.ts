import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_epudf.org_5n3', ['https://epudf.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
