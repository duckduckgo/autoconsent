import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_carnalplus.com_mja', ['https://carnalplus.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
