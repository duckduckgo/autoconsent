import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_itdaily.be_m03', ['https://itdaily.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
