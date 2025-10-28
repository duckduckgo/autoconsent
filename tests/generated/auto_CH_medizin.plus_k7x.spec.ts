import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_medizin.plus_k7x', ['https://medizin.plus/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
