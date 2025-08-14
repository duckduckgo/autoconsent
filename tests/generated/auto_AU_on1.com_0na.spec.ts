import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_on1.com_0na', ['https://www.on1.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
