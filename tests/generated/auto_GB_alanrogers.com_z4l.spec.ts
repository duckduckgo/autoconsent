import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_alanrogers.com_z4l', ['https://alanrogers.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
