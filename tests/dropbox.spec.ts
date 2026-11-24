import generateCMPTests from '../playwright/runner';

generateCMPTests('dropbox', ['https://www.dropbox.com/', 'https://help.dropbox.com/'], { onlyRegions: ['AU', 'GB', 'US'] });
