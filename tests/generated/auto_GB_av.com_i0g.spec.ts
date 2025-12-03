import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_av.com_i0g', ['https://www.av.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
