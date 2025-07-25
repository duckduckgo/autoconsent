import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_trox.de_dqo', ['https://www.trox.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
