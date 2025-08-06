import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_lawyer.com_ilb', ['https://www.lawyer.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
