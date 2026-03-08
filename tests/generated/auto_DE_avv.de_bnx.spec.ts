import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_avv.de_bnx', ['https://avv.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
