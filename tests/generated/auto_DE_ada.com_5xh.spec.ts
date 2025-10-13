import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ada.com_5xh', ['https://ada.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
