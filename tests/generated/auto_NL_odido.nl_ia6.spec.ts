import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_odido.nl_ia6', ['https://www.odido.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
