import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cec-impact.org_p9r', ['https://cec-impact.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
