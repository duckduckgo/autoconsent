import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'cookie-banner-required-only',
    ['https://eastdevon.gov.uk/', 'https://exeter.gov.uk/', 'https://www.teignbridge.gov.uk/'],
    {
        onlyRegions: ['GB'],
    },
);
