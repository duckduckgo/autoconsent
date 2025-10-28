import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_antonyme.org_og5', ['https://www.antonyme.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
