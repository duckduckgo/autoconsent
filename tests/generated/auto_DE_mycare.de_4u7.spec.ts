import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mycare.de_4u7', ['https://www.mycare.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
