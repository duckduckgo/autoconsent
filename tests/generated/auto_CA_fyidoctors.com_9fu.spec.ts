import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fyidoctors.com_9fu', ['https://fyidoctors.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
