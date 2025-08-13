import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mycare.de_icd', ['https://www.mycare.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
