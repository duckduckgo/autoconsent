import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparda.de_3xf', ['https://www.sparda.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
