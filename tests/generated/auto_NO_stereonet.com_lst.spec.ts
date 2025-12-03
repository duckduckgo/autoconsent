import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_stereonet.com_lst', ['https://stereonet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
