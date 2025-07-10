import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bernardin.ca_u9d', ['https://www.bernardin.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
