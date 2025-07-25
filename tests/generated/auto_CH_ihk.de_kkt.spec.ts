import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ihk.de_kkt', ['https://www.ihk.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
