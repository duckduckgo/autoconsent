import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reichelt.com_jgm', ['https://www.reichelt.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
