import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cve.org_sb7', ['https://www.cve.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
