import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pvda.nl_ijx', ['https://www.pvda.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
