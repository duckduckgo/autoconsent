import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_reverb.com_8il', ['https://reverb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
