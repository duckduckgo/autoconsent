import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_support.plex.tv_0', ['https://support.plex.tv/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
