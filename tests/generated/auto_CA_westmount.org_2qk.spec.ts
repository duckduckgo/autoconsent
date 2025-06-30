import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_westmount.org_2qk', ['https://westmount.org/en'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
