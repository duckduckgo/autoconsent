import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_burpee.com_fel', ['https://www.burpee.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
