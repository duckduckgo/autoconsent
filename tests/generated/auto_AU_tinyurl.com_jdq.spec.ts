import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tinyurl.com_jdq', ['https://tinyurl.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
