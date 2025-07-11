import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ontariospca.ca_mon', ['https://ontariospca.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
