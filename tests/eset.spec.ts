import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'eset',
    ['https://www.eset.com/pl/', 'https://www.eset.com/de/', 'https://www.welivesecurity.com/', 'https://help.eset.com/'],
    {
        skipRegions: ['US'],
    },
);
