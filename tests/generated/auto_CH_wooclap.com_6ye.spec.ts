import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wooclap.com_6ye', ['https://www.wooclap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
