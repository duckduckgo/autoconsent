import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hl7.org_jlv', ['https://www.hl7.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
