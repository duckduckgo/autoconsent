import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thepwr.com_90o', ['https://www.thepwr.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
