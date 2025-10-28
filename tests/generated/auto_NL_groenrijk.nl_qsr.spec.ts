import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_groenrijk.nl_qsr', ['https://www.groenrijk.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
