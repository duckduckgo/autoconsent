import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'WP Cookie Notice for GDPR',
    [
        'https://zoner-inshop.cz/',
        'https://fairplayforwomen.com/',
        'https://icelandaurora.com/',
        'https://meyer-koering.de/',
        // 'https://nysba.org/', // cloudflare botwall
        // 'https://www.independentsentinel.com/', // appears only on user iteraction
    ],
    {},
);
