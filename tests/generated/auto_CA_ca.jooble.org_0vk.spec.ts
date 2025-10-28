import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ca.jooble.org_0vk', ['https://ca.jooble.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
