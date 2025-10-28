import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_galaxus.at_jbu', ['https://www.galaxus.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
