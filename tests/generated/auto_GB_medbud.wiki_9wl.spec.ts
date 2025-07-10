import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_medbud.wiki_9wl', ['https://medbud.wiki/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
