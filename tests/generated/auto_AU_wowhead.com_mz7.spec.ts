import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_wowhead.com_mz7', ['https://www.wowhead.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
