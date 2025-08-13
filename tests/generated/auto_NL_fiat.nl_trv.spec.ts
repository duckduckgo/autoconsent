import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fiat.nl_trv', ['https://www.fiat.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
