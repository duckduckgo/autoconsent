import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_nba.com_lri', ['https://www.nba.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
