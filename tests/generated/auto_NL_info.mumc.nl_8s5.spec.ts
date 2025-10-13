import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_info.mumc.nl_8s5', ['https://info.mumc.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
