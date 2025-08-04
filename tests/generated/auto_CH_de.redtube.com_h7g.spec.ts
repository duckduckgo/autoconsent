import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.redtube.com_h7g', ['https://de.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
