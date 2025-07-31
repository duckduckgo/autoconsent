import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_howik.com_fbx', ['https://howik.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
