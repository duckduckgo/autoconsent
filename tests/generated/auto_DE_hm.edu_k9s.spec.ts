import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hm.edu_k9s', ['https://hm.edu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
