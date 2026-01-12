import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_simyo.nl_vm3', ['https://www.simyo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
