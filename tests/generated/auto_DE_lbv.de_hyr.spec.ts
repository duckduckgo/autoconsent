import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lbv.de_hyr', ['https://www.lbv.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
