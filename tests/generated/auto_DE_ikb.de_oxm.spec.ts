import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ikb.de_oxm', ['https://www.ikb.de/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
