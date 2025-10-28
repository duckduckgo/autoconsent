import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dominos.com_cqr', ['https://www.dominos.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
