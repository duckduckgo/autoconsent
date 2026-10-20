import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-law-info', ['https://www.omas-gegen-rechts.org/', 'https://www.fitundattraktiv.de/'], {
    skipRegions: ['US', 'GB'],
});

generateCMPTests('cookie-law-info', [
    'https://www.sbid.org/',
    'https://diroots.com/revit-plugins/renumber-revit-elements-using-a-prefix-a-suffix-and-a-multiplier-with-reordering/',
]);

// reloads the page on reject and accept; the accept reload aborts the opt-in flow
generateCMPTests('cookie-law-info', ['http://lindipendente.online/'], {
    testOptIn: false,
});
