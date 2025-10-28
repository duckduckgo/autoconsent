import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cam.ac.uk_xkl', ['https://www.cam.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
