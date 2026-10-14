import generateCMPTests from '../playwright/runner';

// Opting out reloads the page once ("Cookie Manager" enables OneTrust), so the rule runs twice.
generateCMPTests('glassesusa', ['https://www.glassesusa.com/soccer-glasses', 'https://www.glassesusa.com/eyeglasses'], {
    onlyRegions: ['US'],
    expectedRuns: 2,
});
