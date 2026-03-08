import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_asfored.org_szi', ['https://asfored.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
