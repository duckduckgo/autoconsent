import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_roblox.com_b23', ['https://www.roblox.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
