import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_plex.tv_ee4', ['https://www.plex.tv/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
