import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hm.edu_5yd', ['https://hm.edu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
