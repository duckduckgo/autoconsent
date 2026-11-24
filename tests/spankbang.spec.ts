import generateCMPTests from '../playwright/runner';

// US visitors get no banner
generateCMPTests('spankbang', ['https://spankbang.com/'], { skipRegions: ['US'] });

generateCMPTests('spankbang', ['https://nl.spankbang.com/'], { onlyRegions: ['NL'] });

generateCMPTests('spankbang', ['https://la.spankbang.com/'], { onlyRegions: ['DE'] });
