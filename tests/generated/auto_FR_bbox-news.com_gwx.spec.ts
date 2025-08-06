import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bbox-news.com_gwx', ['https://bbox-news.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
