import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tecadmin.net_llp', ['https://tecadmin.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
