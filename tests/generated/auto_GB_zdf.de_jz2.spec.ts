import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_zdf.de_jz2', ['https://www.zdf.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
