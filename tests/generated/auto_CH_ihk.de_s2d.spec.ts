import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ihk.de_s2d', ['https://www.ihk.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
