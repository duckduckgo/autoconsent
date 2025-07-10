import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_jpost.com_fgc', ['https://www.jpost.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
