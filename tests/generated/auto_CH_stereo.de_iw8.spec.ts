import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stereo.de_iw8', ['https://www.stereo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
