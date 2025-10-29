import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_appear.net_9r0', ['https://www.appear.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
