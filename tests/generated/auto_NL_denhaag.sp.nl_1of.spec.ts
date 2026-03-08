import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denhaag.sp.nl_1of', ['https://denhaag.sp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
