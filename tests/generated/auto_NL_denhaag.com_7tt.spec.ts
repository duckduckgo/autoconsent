import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denhaag.com_7tt', ['https://denhaag.com/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
