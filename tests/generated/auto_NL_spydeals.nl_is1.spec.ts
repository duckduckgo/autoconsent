import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_spydeals.nl_is1', ['https://www.spydeals.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
