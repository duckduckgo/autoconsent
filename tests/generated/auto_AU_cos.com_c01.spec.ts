import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cos.com_c01', ['https://www.cos.com/index.html'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
