import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'instagram-help-center',
    ['https://help.instagram.com/', 'https://about.instagram.com/', 'https://privacycenter.instagram.com/'],
    {
        skipRegions: ['US'],
    },
);
