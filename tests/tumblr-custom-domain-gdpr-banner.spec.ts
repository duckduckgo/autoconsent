import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'tumblr-custom-domain-gdpr-banner',
    ['https://scumbagsandcavaliers.com/', 'https://pauldolgov.com/', 'https://giantcypress.net/', 'https://loveform.com/'],
    { mobile: true, onlyRegions: ['CA'], testOptIn: false },
);
