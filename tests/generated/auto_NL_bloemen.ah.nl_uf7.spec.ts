import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bloemen.ah.nl_uf7', ['https://bloemen.ah.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
