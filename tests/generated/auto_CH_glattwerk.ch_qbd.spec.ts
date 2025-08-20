import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_glattwerk.ch_qbd', ['https://www.glattwerk.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
