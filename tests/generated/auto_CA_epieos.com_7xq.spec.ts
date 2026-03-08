import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_epieos.com_7xq', ['https://epieos.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
