import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_audials.com_fjb', ['https://audials.com/en/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
