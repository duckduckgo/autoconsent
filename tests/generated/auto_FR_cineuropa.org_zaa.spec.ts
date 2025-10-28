import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cineuropa.org_zaa', ['https://cineuropa.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
