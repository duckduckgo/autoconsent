import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_debilt.sp.nl_3ei', ['https://debilt.sp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
