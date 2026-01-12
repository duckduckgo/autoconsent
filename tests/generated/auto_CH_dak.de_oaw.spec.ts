import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dak.de_oaw', ['https://www.dak.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
