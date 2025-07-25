import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ratp.fr_gyw', ['https://www.ratp.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
