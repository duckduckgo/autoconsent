import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fixpart.be_lqf', ['https://fixpart.be/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
