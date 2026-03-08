import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_demonlist.org_511', ['https://demonlist.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
