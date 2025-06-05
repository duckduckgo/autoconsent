import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_watch.plex.tv_0', ['https://watch.plex.tv/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
