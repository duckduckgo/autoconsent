import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_verivox.de_qyu', ['https://www.verivox.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
