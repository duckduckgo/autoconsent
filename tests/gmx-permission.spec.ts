import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'gmx-permission',
    ['https://www.gmx.com/', 'https://support.gmx.com/', 'https://www.gmx.co.uk/', 'https://www.gmx.fr/', 'https://www.gmx.es/'],
    {
        mobile: true,
    },
);

generateCMPTests('gmx-permission', ['https://www.mail.com/'], {
    mobile: true,
    skipRegions: ['US'],
});
