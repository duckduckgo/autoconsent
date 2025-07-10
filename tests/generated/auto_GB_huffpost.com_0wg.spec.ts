import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_huffpost.com_0wg', ['https://www.huffpost.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
