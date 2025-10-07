import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rundel.de_lcc', ['https://www.rundel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
