import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-law-info', ['https://www.omas-gegen-rechts.org/', 'https://www.fitundattraktiv.de/'], {
    skipRegions: ['US', 'GB'],
});

generateCMPTests('cookie-law-info', [
    'https://www.sbid.org/',
    'https://diroots.com/revit-plugins/renumber-revit-elements-using-a-prefix-a-suffix-and-a-multiplier-with-reordering/',
]);

// legacy plugin versions (<= 1.5.x): no CLI API, notice bar only
generateCMPTests('cookie-law-info', ['https://brunaboinne.admit-one.eu/', 'https://www.conservatorio.pr.it/', 'https://www.ponmetro.it/']);
