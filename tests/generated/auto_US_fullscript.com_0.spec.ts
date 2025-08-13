import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fullscript.com_0', ['https://fullscript.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
