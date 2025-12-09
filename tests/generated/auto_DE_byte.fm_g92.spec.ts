import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_byte.fm_g92', ['https://www.byte.fm/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
