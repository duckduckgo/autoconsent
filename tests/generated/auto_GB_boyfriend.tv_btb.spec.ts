import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_boyfriend.tv_btb', ['https://www.boyfriend.tv/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
