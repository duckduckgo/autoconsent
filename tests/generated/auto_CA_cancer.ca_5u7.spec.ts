import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cancer.ca_5u7', ['https://cancer.ca/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
