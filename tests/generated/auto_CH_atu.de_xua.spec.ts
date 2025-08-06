import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_atu.de_xua', ['https://www.atu.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
