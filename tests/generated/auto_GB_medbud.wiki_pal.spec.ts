import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_medbud.wiki_pal', ['https://medbud.wiki/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
