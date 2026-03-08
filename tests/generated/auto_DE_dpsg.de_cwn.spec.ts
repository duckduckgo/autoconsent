import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dpsg.de_cwn', ['https://dpsg.de/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
