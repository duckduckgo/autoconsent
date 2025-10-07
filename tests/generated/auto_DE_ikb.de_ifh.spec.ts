import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ikb.de_ifh', ['https://www.ikb.de/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
