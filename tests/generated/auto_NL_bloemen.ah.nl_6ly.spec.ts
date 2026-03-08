import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bloemen.ah.nl_6ly', ['https://bloemen.ah.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
