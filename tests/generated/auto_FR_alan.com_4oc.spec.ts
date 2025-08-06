import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alan.com_4oc', ['https://alan.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
