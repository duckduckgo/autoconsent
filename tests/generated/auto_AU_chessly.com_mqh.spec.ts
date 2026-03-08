import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_chessly.com_mqh', ['https://chessly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
