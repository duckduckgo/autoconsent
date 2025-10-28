import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_nvcc.edu_diu', ['https://www.nvcc.edu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
