import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ucl.ac.uk_hea', ['https://www.ucl.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
