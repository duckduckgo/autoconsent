import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_movisie.nl_ufg', ['https://www.movisie.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
