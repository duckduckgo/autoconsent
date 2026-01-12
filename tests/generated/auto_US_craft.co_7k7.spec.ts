import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_craft.co_7k7', ['https://global.craft.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
