import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_mubi.com_a8q', ['https://mubi.com/en/ca'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
