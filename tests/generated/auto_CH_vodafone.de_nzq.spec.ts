import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vodafone.de_nzq', ['https://www.vodafone.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
