import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_huk.de_q45', ['https://www.huk.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
