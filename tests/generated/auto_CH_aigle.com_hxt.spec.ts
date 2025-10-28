import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aigle.com_hxt', ['https://www.aigle.com/fr/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
