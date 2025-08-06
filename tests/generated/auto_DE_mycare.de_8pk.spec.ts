import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mycare.de_8pk', ['https://www.mycare.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
