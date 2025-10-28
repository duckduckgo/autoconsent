import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pvv.nl_93f', ['https://www.pvv.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
