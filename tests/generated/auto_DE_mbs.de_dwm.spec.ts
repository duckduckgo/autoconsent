import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mbs.de_dwm', ['https://www.mbs.de/de/home.html'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
