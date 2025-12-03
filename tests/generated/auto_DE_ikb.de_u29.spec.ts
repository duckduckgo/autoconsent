import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ikb.de_u29', ['https://www.ikb.de/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
