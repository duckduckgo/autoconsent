import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_edgedelta.com_t6y', ['https://edgedelta.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
