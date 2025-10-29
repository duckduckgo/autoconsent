import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_redtube.com_o4a', ['https://www.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
