import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hrw.org_qh6', ['https://www.hrw.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
