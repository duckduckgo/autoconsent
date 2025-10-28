import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sydney.com_q3k', ['https://www.sydney.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
