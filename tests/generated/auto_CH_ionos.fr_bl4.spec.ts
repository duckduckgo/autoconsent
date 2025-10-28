import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ionos.fr_bl4', ['https://www.ionos.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
