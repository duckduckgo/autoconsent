import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'click.io',
    ['https://www.golfshake.com/', 'https://www.thesalarycalculator.co.uk/', 'https://www.moneymagpie.com/', 'https://www.treccani.it/'],
    {
        skipRegions: ['US', 'AU', 'CA', 'JP'],
    },
);

// US privacy center banner (or the full dialog, depending on the state)
generateCMPTests('click.io', ['https://www.cronista.com/', 'https://www.elobservador.com.uy/', 'https://manofmany.com/'], {
    onlyRegions: ['US'],
});

// pay-or-consent variants should be detected but not acted upon
generateCMPTests('click.io', ['https://www.xtrafondos.com/', 'https://hh-autos.com/', 'https://politpro.eu/'], {
    skipRegions: ['US', 'AU', 'CA', 'JP'],
    expectPopupOpen: false,
    testOptIn: false,
    testOptOut: false,
    testSelfTest: false,
});
