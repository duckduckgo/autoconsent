import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_estinea.nl_fqx', ['https://estinea.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
