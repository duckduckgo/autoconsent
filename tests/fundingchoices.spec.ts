import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'funding-choices',
    ['https://www.meteoblue.com/', 'https://infos-oeffentlicher-dienst.de/', 'https://hbr.org/', 'https://www.dinarguru.com/'],
    {
        skipRegions: ['US', 'GB'],
    },
);

// Legitimate-interest-only notice
generateCMPTests('funding-choices', ['https://www.knitting-bee.com/', 'https://ukdefencejournal.org.uk/'], {
    onlyRegions: ['GB'],
    testOptIn: false,
});
