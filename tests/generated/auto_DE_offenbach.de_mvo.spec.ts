import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_offenbach.de_mvo', ['https://www.offenbach.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
