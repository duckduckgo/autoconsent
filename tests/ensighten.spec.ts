import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Ensighten',
    [
        'https://www.audi.ca/en/',
        'https://www.volkswagen.de/',
        'https://de.rs-online.com/',
        'https://www.easyjet.com/',
        'https://jp.norton.com/',
    ],
    {
        skipRegions: ['US'],
    },
);

// banner with a single accept button; reject is only available in the hidden preferences modal
generateCMPTests('Ensighten', ['https://www.redwingshoes.com/']);

// collapsed banner: reject button exists but is not visible
generateCMPTests('Ensighten', ['https://www.avast.com/'], {
    testOptIn: false,
    onlyRegions: ['US'],
});
