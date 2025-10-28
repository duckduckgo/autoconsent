import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_elriwa.de_fsv', ['https://www.elriwa.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
