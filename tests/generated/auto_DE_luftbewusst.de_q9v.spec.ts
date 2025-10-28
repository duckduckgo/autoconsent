import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_luftbewusst.de_q9v', ['https://luftbewusst.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
