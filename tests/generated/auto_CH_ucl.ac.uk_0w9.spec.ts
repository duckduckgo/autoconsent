import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ucl.ac.uk_0w9', ['https://www.ucl.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
