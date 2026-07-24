import generateCMPTests from '../playwright/runner';

generateCMPTests('tumblr-com', ['https://www.tumblr.com/'], {});
generateCMPTests(
    'tumblr-com',
    ['https://scumbagsandcavaliers.com/', 'https://pauldolgov.com/', 'https://giantcypress.net/', 'https://loveform.com/'],
    { mobile: true, onlyRegions: ['CA'] },
);
