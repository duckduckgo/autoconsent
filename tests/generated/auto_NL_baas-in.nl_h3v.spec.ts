import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_baas-in.nl_h3v', ['https://baas-in.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
