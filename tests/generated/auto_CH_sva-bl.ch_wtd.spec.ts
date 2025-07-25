import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sva-bl.ch_wtd', ['https://www.sva-bl.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
