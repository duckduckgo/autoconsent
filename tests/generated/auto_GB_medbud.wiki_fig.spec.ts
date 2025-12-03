import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_medbud.wiki_fig', ['https://medbud.wiki/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
