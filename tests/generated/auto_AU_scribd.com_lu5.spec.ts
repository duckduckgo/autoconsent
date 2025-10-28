import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_scribd.com_lu5', ['https://www.scribd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
