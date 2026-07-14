import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Complianz optin',
    [
        // 'https://stetson.com/',
        // 'https://clickhouse.com/blog/open-source-10', // region-dependent: shows optin variant in EU/JP, opt-out variant in US
        'https://marahoffman.com/',
    ],
    {},
);
