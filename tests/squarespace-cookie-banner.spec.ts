import generateCMPTests from '../playwright/runner';

// Squarespace serves the banner in GDPR-covered regions for these sites but not in the US.
generateCMPTests(
    'squarespace-cookie-banner',
    ['https://www.petersen.org/', 'https://insidethesquare.co/', 'https://www.urallawoolroom.com.au/'],
    {
        skipRegions: ['US'],
    },
);

// hickeyfreeman.com shows the Squarespace banner in the US (and served Squarespace's
// polyfilled Promise, which used to break detectPopups → the reason this URL was reported).
generateCMPTests('squarespace-cookie-banner', ['https://hickeyfreeman.com/'], {
    onlyRegions: ['US'],
});
