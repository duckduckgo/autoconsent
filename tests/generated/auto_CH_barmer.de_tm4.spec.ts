import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_barmer.de_tm4', ['https://www.barmer.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
