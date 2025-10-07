import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_oost.nl_ioy', ['https://www.oost.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
