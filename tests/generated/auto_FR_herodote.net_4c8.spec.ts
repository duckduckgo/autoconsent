import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_herodote.net_4c8', ['https://www.herodote.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
