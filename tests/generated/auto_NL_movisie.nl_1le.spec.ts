import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_movisie.nl_1le', ['https://www.movisie.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
