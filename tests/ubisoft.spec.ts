import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'ubisoft',
    [
        'https://www.ubisoft.com/en-gb/',
        'https://www.ubisoft.com/en-gb/company/social-impact/family-gaming/articles/ubisoft-s-young-player-account',
    ],
    {
        onlyRegions: ['DE', 'FR', 'GB'],
    },
);
