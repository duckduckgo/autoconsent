import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fyidoctors.com_25j', ['https://fyidoctors.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
