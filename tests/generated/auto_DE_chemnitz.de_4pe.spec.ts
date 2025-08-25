import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_chemnitz.de_4pe', ['https://www.chemnitz.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
