import generateCMPTests from '../playwright/runner';

generateCMPTests('spares2repair', ['https://spares2repair.co.uk/', 'https://spares4shavers.co.uk/'], {
    onlyRegions: ['GB', 'US', 'DE'],
});
