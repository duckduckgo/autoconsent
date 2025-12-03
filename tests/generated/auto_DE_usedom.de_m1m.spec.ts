import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_usedom.de_m1m', ['https://usedom.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
