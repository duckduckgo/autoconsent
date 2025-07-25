import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_selectra.nl_qwo', ['https://selectra.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
