import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_odido.nl_arv', ['https://www.odido.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
