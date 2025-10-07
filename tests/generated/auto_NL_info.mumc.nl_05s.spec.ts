import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_info.mumc.nl_05s', ['https://info.mumc.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
