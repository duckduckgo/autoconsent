import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_av.com_02f', ['https://www.av.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
