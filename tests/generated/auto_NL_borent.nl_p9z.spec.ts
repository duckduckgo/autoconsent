import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_borent.nl_p9z', ['https://borent.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
