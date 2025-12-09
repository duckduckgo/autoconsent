import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_reverb.com_3ey', ['https://reverb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
