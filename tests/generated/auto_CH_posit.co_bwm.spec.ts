import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_posit.co_bwm', ['https://posit.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
