import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_link.aps.org_n1r', ['https://link.aps.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
