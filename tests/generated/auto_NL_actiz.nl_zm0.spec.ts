import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_actiz.nl_zm0', ['https://www.actiz.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
