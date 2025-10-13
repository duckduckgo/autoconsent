import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gld.nl_rsk', ['https://www.gld.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
