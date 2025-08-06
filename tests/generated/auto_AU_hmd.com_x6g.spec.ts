import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hmd.com_x6g', ['https://www.hmd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
