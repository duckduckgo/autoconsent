import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_boyfriend.tv_i70', ['https://www.boyfriend.tv/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
