import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_help.id.me_ars', ['https://help.id.me/hc/en-us'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
