import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reichelt.com_9m9', ['https://www.reichelt.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
