import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ersnet.org_epe', ['https://www.ersnet.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
