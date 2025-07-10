import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_belkin.com_yeq', ['https://www.belkin.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
