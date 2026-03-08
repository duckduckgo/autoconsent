import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_club-oase.de_pti', ['https://club-oase.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
