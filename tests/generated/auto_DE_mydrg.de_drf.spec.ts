import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mydrg.de_drf', ['https://www.mydrg.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
