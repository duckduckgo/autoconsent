import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dkamera.de_h12', ['https://www.dkamera.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
