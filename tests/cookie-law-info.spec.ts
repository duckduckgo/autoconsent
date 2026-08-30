import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-law-info', ['https://www.omas-gegen-rechts.org/', 'https://www.fitundattraktiv.de/'], {
    skipRegions: ['US', 'GB'],
});

generateCMPTests('cookie-law-info', [
    'https://www.sbid.org/',
    'https://diroots.com/revit-plugins/renumber-revit-elements-using-a-prefix-a-suffix-and-a-multiplier-with-reordering/',
]);

// Legacy plugin versions: no CLI object, only the global cli_show_cookiebar function.
generateCMPTests('cookie-law-info', ['https://share24.gr/', 'https://www.getrix.it/', 'https://parafia.info.pl/']);
