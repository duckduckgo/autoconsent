import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ionos.de_vrp', ['https://www.ionos.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
