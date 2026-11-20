import generateCMPTests from '../playwright/runner';

// Banner is shown in EEA; US and GB get a 403 page
generateCMPTests('laxd', ['https://video.laxd.com/'], {
    onlyRegions: ['DE', 'FR', 'NL'],
});
