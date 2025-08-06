import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_uni-ulm.de_df9', ['https://www.uni-ulm.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
