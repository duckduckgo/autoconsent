import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dominos.com_ajy', ['https://www.dominos.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
