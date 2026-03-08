import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_doorbraak.be_xul', ['https://doorbraak.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
