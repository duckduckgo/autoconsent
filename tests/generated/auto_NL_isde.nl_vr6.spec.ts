import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_isde.nl_vr6', ['https://www.isde.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
