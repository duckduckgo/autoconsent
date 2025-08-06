import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_easybell.de_44z', ['https://www.easybell.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
