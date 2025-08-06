import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lib.ugent.be_exg', ['https://lib.ugent.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
