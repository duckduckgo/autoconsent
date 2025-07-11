import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_yubico.com_0', ['https://www.yubico.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
