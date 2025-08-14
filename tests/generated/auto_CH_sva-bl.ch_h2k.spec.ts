import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sva-bl.ch_h2k', ['https://www.sva-bl.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
