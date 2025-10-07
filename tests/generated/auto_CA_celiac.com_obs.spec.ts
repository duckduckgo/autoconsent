import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_celiac.com_obs', ['https://www.celiac.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
