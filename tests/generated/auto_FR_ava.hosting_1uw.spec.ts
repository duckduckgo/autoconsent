import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ava.hosting_1uw', ['https://ava.hosting/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
