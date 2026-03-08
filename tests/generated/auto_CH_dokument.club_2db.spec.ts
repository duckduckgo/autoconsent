import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dokument.club_2db', ['https://dokument.club/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
