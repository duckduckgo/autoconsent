import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fli.de_8zt', ['https://www.fli.de/de/startseite'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
