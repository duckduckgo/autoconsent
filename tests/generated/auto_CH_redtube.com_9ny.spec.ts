import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_redtube.com_9ny', ['https://www.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
