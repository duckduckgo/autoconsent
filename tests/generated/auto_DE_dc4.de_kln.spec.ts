import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dc4.de_kln', ['https://dc4.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
