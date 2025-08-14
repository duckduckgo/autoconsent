import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arket.com_er2', ['https://www.arket.com/de-ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
