import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mydrg.de_nsj', ['https://www.mydrg.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
