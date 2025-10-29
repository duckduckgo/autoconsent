import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_system76.com_3mw', ['https://system76.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
