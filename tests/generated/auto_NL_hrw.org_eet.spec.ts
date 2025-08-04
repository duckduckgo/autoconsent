import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hrw.org_eet', ['https://www.hrw.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
