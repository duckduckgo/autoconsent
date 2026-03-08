import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arsvivendi.com_l6b', ['https://arsvivendi.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
