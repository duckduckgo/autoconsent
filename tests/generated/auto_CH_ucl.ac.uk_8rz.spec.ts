import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ucl.ac.uk_8rz', ['https://www.ucl.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
