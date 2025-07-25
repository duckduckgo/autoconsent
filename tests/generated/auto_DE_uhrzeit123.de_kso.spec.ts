import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uhrzeit123.de_kso', ['https://uhrzeit123.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
