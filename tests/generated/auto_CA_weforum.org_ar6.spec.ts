import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_weforum.org_ar6', ['https://www.weforum.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
