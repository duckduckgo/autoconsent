import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_acsw.ab.ca_6xu', ['https://acsw.ab.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
