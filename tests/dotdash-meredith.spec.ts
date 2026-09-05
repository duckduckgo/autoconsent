import generateCMPTests from '../playwright/runner';

// Dotdash Meredith network of sites. The OneTrust banner is server-side rendered
// and the OneTrust SDK is only loaded on demand (via Mntl.CMP), so the generic
// Onetrust rule cannot interact with it reliably.
generateCMPTests(
    'dotdash-meredith',
    [
        'https://people.com/jean-smart-best-roles-in-tv-shows-before-hacks-and-snl-photos-8720080',
        'https://www.allrecipes.com/',
        'https://www.investopedia.com/',
        'https://www.byrdie.com/',
        'https://www.simplyrecipes.com/',
        'https://www.verywellhealth.com/',
        'https://www.foodandwine.com/',
        'https://www.realsimple.com/',
    ],
    {
        // The banner is only visible to users in regions where consent is required (mostly EU/GDPR).
        // From a US IP the banner stays hidden, so we skip these regions.
        onlyRegions: ['DE', 'GB', 'FR'],
    },
);
