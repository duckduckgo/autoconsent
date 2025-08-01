import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rundel.de_8hq', ['https://www.rundel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
