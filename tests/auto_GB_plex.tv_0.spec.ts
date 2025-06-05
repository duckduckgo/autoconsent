import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_plex.tv_0', ['https://www.plex.tv/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
