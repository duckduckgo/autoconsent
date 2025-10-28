import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stereo.de_i61', ['https://www.stereo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
