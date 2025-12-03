import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rundel.de_v2n', ['https://www.rundel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
