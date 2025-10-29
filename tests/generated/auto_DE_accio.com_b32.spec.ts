import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_accio.com_b32', ['https://www.accio.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
