import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_easybell.de_0i4', ['https://www.easybell.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
