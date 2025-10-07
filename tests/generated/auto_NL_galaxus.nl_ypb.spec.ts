import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_galaxus.nl_ypb', ['https://www.galaxus.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
