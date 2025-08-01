import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_redtube.com_lpd', ['https://www.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
