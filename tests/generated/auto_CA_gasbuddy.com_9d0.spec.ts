import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_gasbuddy.com_9d0', ['https://www.gasbuddy.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
