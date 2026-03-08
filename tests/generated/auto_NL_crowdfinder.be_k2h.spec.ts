import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_crowdfinder.be_k2h', ['https://crowdfinder.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
