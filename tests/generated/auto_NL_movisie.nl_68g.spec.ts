import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_movisie.nl_68g', ['https://www.movisie.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
