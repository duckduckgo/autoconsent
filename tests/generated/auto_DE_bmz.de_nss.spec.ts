import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bmz.de_nss', ['https://www.bmz.de/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
