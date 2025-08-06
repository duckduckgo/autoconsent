import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_anil.org_y6z', ['https://www.anil.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
