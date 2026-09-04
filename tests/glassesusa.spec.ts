import generateCMPTests from '../playwright/runner';

// Outside the US the site shows the standard OneTrust banner, handled by the Onetrust rule.
generateCMPTests('glassesusa', ['https://www.glassesusa.com/soccer-glasses', 'https://www.glassesusa.com/eyeglasses'], {
    onlyRegions: ['US'],
});

// The mobile site is a separate implementation of the same notice, without a close cross.
generateCMPTests('glassesusa', ['https://www.glassesusa.com/soccer-glasses'], {
    onlyRegions: ['US'],
    mobile: true,
});
