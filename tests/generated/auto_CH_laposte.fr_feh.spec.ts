import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_laposte.fr_feh', ['https://www.laposte.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
