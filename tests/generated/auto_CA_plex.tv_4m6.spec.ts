import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_plex.tv_4m6', ['https://www.plex.tv/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
