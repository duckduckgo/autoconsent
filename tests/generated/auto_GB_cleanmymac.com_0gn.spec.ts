import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cleanmymac.com_0gn', ['https://cleanmymac.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
