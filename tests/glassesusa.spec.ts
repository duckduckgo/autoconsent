import generateCMPTests from '../playwright/runner';

// Outside the US the site shows the standard OneTrust banner, handled by the Onetrust rule.
generateCMPTests('glassesusa', ['https://www.glassesusa.com/soccer-glasses', 'https://www.glassesusa.com/eyeglasses'], {
    onlyRegions: ['US'],
});
