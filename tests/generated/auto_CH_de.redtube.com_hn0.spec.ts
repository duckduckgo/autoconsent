import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.redtube.com_hn0', ['https://de.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
