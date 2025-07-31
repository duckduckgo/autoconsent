import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cos.com_640', ['https://www.cos.com/en-au'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
