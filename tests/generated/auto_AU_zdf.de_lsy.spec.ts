import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_zdf.de_lsy', ['https://www.zdf.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
