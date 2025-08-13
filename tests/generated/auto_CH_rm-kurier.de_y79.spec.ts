import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rm-kurier.de_y79', ['https://rm-kurier.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
