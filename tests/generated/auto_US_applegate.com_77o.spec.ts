import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_applegate.com_77o', ['https://applegate.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
