import generateCMPTests from '../playwright/runner';

generateCMPTests('ancestry', ['https://www.ancestry.co.uk/', 'https://www.ancestry.com/'], { onlyRegions: ['GB'] });
generateCMPTests('ancestry', ['https://www.ancestry.de/'], { onlyRegions: ['DE'] });
