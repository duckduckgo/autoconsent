import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bloemen.ah.nl_512', ['https://bloemen.ah.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
