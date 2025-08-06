import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eb.de_oku', ['https://www.eb.de/startseite.html'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
