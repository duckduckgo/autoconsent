import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_watch.plex.tv_ngd', ['https://watch.plex.tv/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
