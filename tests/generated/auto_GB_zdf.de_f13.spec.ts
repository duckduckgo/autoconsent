import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_zdf.de_f13', ['https://www.zdf.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
