import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_entrepotes.org_0ky', ['https://entrepotes.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
