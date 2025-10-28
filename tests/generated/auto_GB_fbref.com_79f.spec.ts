import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fbref.com_79f', ['https://fbref.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
