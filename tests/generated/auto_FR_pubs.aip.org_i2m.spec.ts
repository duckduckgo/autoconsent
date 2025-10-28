import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pubs.aip.org_i2m', ['https://pubs.aip.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
