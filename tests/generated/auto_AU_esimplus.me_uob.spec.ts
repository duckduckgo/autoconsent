import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_esimplus.me_uob', ['https://esimplus.me/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
