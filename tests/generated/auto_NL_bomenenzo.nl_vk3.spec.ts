import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bomenenzo.nl_vk3', ['https://www.bomenenzo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
