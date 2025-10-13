import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ihk.de_jmj', ['https://www.ihk.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
