import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ftm.nl_rx0', ['https://www.ftm.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
