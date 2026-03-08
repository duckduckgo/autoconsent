import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fightnews.com_3ty', ['https://fightnews.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
