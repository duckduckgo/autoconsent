import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_borent.nl_2if', ['https://borent.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
