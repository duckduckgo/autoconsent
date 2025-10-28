import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_komonews.com_vpu', ['https://komonews.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
