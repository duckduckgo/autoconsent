import generateCMPTests from '../playwright/runner';

// US and GB visitors get no banner
generateCMPTests('fca-cookielaw', ['https://www.alfaromeo.de/', 'https://www.fiat.de/', 'https://www.jeep.de/'], { onlyRegions: ['DE'] });
