import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_jellycat.com_h1k', ['https://jellycat.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
