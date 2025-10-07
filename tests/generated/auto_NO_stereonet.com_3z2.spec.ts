import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_stereonet.com_3z2', ['https://stereonet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
