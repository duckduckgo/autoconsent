import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_192.com_54y', ['https://www.192.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
