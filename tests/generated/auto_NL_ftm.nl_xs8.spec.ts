import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ftm.nl_xs8', ['https://www.ftm.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
