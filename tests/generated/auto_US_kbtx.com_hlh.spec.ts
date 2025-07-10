import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_kbtx.com_hlh', ['https://www.kbtx.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
