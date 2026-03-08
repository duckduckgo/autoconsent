import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alynea.org_4yr', ['https://alynea.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
