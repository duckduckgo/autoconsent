import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.redtube.com_0lh', ['https://de.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
