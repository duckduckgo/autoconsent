import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tutonaut.de_su8', ['https://www.tutonaut.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
