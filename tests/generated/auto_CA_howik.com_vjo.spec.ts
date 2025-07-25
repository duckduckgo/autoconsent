import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_howik.com_vjo', ['https://howik.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
