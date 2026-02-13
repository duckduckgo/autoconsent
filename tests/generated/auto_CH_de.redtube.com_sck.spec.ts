import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.redtube.com_sck', ['https://de.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
