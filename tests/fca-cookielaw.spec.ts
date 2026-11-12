import generateCMPTests from '../playwright/runner';

// US and GB visitors get no banner
generateCMPTests('fca-cookielaw', ['https://www.alfaromeo.de/', 'https://www.fiat.de/', 'https://www.jeep.de/'], { onlyRegions: ['DE'] });

generateCMPTests('fca-cookielaw', ['https://www.stellantis.com/en?adobe_mc_ref='], { onlyRegions: ['FR'] });

generateCMPTests('fca-cookielaw', ['https://www.jeep.nl/?adobe_mc_ref='], { onlyRegions: ['NL'] });
