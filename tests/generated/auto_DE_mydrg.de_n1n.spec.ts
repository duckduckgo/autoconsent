import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mydrg.de_n1n', ['https://www.mydrg.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
