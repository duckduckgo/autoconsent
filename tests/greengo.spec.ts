import generateCMPTests from '../playwright/runner';

// US visitors get no banner
generateCMPTests('greengo', ['https://www.greengo.voyage/en'], {
    onlyRegions: ['FR', 'GB', 'DE'],
});
