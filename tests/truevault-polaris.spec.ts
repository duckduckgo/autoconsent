import generateCMPTests from '../playwright/runner';

generateCMPTests('truevault-polaris', ['https://www.crunch.com/']);

// the informational banner stores no consent state, so the self test cannot pass on it
generateCMPTests('truevault-polaris', ['https://www.amawaterways.com/', 'https://www.musicnotes.com/'], {
    testSelfTest: false,
});

// these only show a banner under US privacy laws
generateCMPTests('truevault-polaris', ['https://www.mcgeeandco.com/collections/wallpaper', 'https://www.thorne.com/'], {
    onlyRegions: ['US'],
});

// shows the GDPR variant of the banner, with an explicit "Decline" button
generateCMPTests('truevault-polaris', ['https://www.universalstandard.com/'], {
    onlyRegions: ['GB', 'DE', 'FR'],
});
