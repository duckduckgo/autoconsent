import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_en.fgirl.ch_bid', ['https://www.en.fgirl.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
