import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_redtube.com_9sk', ['https://www.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
