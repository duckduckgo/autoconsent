import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thetimes.com_vct', ['https://www.thetimes.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
