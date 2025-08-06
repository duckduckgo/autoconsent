import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hs-fulda.de_xl8', ['https://www.hs-fulda.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
