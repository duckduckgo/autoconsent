import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mannend.nl_ais', ['https://mannend.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
