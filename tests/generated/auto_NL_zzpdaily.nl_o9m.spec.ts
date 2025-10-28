import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zzpdaily.nl_o9m', ['https://zzpdaily.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
