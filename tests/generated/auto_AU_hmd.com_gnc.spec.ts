import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hmd.com_gnc', ['https://www.hmd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
