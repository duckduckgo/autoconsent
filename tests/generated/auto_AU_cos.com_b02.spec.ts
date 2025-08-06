import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cos.com_b02', ['https://www.cos.com/en-au'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
