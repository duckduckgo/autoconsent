import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_openstax.org_ucq', ['https://openstax.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
