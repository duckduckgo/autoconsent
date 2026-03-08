import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_enschede.sp.nl_as1', ['https://enschede.sp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
