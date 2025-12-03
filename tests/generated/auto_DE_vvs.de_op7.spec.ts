import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vvs.de_op7', ['https://www.vvs.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
