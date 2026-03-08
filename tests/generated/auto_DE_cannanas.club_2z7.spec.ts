import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cannanas.club_2z7', ['https://cannanas.club/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
