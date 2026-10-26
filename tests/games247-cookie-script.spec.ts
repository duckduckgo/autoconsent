import generateCMPTests from '../playwright/runner';

// the banner is only shown in the CookieScript geo-targeted regions (EEA, UK, CH, JP, ...)
generateCMPTests(
    'games247-cookie-script',
    ['https://www.247solitaire.com/', 'https://www.247freecell.com/', 'https://www.247mahjong.com/', 'https://www.247backgammon.org/'],
    { skipRegions: ['US', 'CA', 'AU'], simulateUserInput: true },
);
