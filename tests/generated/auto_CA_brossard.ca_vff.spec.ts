import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_brossard.ca_vff', ['https://brossard.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
