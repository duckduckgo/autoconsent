import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_powells.com_gvw', ['https://www.powells.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
