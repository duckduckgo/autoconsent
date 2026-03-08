import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cla.auburn.edu_vfy', ['https://cla.auburn.edu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
