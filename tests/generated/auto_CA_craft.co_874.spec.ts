import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_craft.co_874', ['https://global.craft.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
