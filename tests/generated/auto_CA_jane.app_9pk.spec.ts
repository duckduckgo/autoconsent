import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_jane.app_9pk', ['https://jane.app/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
