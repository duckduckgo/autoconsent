import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_redtube.com_b2g', ['https://www.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
