import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bmz.de_74r', ['https://www.bmz.de/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
