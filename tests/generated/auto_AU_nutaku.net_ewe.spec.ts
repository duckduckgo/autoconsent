import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_nutaku.net_ewe', ['https://www.nutaku.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
