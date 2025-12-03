import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denhaag.com_k2i', ['https://denhaag.com/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
