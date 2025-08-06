import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_zdf.de_q9k', ['https://www.zdf.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
