import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_scribd.com_ysg', ['https://www.scribd.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
