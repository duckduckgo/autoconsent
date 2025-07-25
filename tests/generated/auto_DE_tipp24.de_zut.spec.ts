import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tipp24.de_zut', ['https://www.tipp24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
