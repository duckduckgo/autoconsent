import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_jellycat.com_jjc', ['https://jellycat.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
