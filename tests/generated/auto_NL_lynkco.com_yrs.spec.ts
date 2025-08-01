import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lynkco.com_yrs', ['https://www.lynkco.com/nl-nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
