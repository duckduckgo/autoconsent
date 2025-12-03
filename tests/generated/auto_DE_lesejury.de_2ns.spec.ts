import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lesejury.de_2ns', ['https://www.lesejury.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
