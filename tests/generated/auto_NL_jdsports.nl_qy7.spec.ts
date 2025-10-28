import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_jdsports.nl_qy7', ['https://www.jdsports.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
