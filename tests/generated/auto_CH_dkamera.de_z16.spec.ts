import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dkamera.de_z16', ['https://www.dkamera.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
