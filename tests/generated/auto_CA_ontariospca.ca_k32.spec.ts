import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ontariospca.ca_k32', ['https://ontariospca.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
