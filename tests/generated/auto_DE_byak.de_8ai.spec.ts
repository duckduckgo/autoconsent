import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_byak.de_8ai', ['https://www.byak.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
