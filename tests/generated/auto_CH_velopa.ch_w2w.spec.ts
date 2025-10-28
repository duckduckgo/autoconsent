import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_velopa.ch_w2w', ['https://www.velopa.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
