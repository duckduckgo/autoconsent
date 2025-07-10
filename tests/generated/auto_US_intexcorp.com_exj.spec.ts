import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_intexcorp.com_exj', ['https://intexcorp.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
