import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lynkco.com_snr', ['https://www.lynkco.com/nl-nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
