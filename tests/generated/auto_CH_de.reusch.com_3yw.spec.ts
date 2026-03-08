import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.reusch.com_3yw', ['https://de.reusch.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
