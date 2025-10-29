import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_byte.fm_qvo', ['https://www.byte.fm/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
