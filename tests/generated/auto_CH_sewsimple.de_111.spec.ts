import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sewsimple.de_111', ['https://sewsimple.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
