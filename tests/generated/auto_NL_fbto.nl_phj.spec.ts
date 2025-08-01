import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fbto.nl_phj', ['https://www.fbto.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
