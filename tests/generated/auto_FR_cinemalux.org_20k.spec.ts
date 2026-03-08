import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cinemalux.org_20k', ['https://cinemalux.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
