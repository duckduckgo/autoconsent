import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_qvc.de_jcc', ['https://www.qvc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
