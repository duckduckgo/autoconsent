import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_idfa.nl_d6h', ['https://www.idfa.nl/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
