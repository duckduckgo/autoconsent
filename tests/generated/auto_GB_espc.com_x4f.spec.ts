import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_espc.com_x4f', ['https://espc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
