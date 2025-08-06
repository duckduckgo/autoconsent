import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_huk.de_5ql', ['https://www.huk.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
