import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_akadem.org_ehg', ['https://akadem.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
