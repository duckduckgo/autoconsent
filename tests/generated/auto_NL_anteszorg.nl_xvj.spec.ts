import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_anteszorg.nl_xvj', ['https://anteszorg.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
