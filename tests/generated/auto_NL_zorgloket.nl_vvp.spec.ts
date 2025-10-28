import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zorgloket.nl_vvp', ['https://zorgloket.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
