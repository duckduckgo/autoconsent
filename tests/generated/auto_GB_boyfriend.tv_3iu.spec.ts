import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_boyfriend.tv_3iu', ['https://www.boyfriend.tv/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
