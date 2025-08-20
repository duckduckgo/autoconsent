import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_watch.plex.tv_esx', ['https://watch.plex.tv/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
