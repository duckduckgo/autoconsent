import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fhu.edu_ed8', ['https://fhu.edu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
