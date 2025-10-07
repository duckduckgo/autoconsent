import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_iserv.de_p4x', ['https://iserv.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
