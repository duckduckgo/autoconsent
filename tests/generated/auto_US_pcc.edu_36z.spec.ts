import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_pcc.edu_36z', ['https://www.pcc.edu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
