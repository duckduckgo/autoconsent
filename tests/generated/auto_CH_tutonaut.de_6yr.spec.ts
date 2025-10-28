import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tutonaut.de_6yr', ['https://www.tutonaut.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
