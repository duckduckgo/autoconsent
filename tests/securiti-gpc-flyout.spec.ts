import generateCMPTests from '../playwright/runner';

// Securiti shows the GPC flyout only to browsers that send the GPC signal.
generateCMPTests(
    'securiti-gpc-flyout',
    [
        'https://www.newportbrass.com/products/kitchen/pull-down-faucets/',
        'https://www.masco.com/',
        'https://www.rollins.com/',
        'https://www.hotspring.com/',
        // flyout variant with a "Hide the banner" button
        'https://www.tollbrothers.com/',
    ],
    { gpc: true },
);

// blocks visitors from Japan
generateCMPTests('securiti-gpc-flyout', ['https://www.campingworld.com/'], {
    gpc: true,
    skipRegions: ['JP'],
});
