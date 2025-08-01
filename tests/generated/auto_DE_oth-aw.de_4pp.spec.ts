import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_oth-aw.de_4pp', ['https://www.oth-aw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
