import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hek.de_vl2', ['https://www.hek.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
