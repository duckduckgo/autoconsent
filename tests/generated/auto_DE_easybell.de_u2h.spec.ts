import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_easybell.de_u2h', ['https://www.easybell.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
