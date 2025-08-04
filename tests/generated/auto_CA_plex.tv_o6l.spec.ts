import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_plex.tv_o6l', ['https://www.plex.tv/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
