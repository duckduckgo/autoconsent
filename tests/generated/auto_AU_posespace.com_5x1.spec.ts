import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_posespace.com_5x1', ['https://posespace.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
