import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_musical.ch_v1w', ['https://www.musical.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
