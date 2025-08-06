import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uhrzeit123.de_pgh', ['https://uhrzeit123.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
