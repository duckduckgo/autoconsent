import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fli.de_io7', ['https://www.fli.de/de/startseite'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
