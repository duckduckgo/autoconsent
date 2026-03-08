import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ecmlpkdd.org_pp5', ['https://ecmlpkdd.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
