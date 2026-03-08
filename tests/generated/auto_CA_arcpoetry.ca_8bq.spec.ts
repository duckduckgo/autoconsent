import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_arcpoetry.ca_8bq', ['https://arcpoetry.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
