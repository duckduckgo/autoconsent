import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ing.com_8kf', ['https://www.ing.com/Home.htm'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
