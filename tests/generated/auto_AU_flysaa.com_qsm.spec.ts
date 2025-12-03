import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_flysaa.com_qsm', ['https://www.flysaa.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
