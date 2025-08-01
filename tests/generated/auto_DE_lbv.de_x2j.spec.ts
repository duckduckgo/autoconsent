import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lbv.de_x2j', ['https://www.lbv.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
