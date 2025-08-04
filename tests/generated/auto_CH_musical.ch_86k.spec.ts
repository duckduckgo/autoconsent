import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_musical.ch_86k', ['https://www.musical.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
