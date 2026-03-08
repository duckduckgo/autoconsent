import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_burobrand.nl_8cy', ['https://burobrand.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
