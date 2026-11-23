import generateCMPTests from '../playwright/runner';
generateCMPTests(
    'marriott-notice',
    ['https://www.ritzcarlton.com/', 'https://www.stregis.com/', 'https://www.jwmarriott.com/', 'https://www.westin.com/'],
    {
        onlyRegions: ['US'],
    },
);
