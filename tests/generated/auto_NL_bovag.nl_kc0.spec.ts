import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bovag.nl_kc0', ['https://www.bovag.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
