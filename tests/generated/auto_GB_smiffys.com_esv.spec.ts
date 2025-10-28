import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_smiffys.com_esv', ['https://www.smiffys.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
