import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-law-info', ['https://www.omas-gegen-rechts.org/', 'https://www.fitundattraktiv.de/'], {
    skipRegions: ['US', 'GB'],
});

generateCMPTests('cookie-law-info', [
    'https://www.sbid.org/',
    'https://diroots.com/revit-plugins/renumber-revit-elements-using-a-prefix-a-suffix-and-a-multiplier-with-reordering/',
]);

// Legacy plugin versions expose no CLI object, and their notice-only bar has nothing to opt in to.
generateCMPTests('cookie-law-info', ['https://www.ejerciciodeingles.com/', 'https://www.total-photoshop.com/'], { testOptIn: false });
