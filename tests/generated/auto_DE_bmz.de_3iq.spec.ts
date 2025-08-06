import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bmz.de_3iq', ['https://www.bmz.de/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
