import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bovag.nl_u79', ['https://www.bovag.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
