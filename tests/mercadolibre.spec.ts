import generateCMPTests from '../playwright/runner';

// the preferences modal embeds a frame that is handled by the mercadolibre-embed rule, which reports its own run
generateCMPTests(
    'mercadolibre',
    [
        'https://www.mercadolibre.com.ar/',
        'https://www.mercadopago.com.br/',
        'https://www.mercadolivre.com.br/',
        'https://www.mercadolibre.com.mx/',
        'https://www.mercadolibre.com.uy/',
        'https://www.mercadolibre.com.ve/',
        // the preferences frame is cross-origin on subdomains
        'https://vendedores.mercadolivre.com.br/',
        'https://vendedores.mercadolibre.com.ar/',
    ],
    { expectedRuns: 2 },
);

// Saving preferences freezes the page main thread for 10-45s in headless Chrome, exceeding the test timeout.
generateCMPTests('mercadolibre', ['https://www.mercadopago.com.ar/'], { testOptOut: false, expectedRuns: 2 });

// page screenshots time out on this site, which delays the self-test past the runner's wait
generateCMPTests('mercadolibre', ['https://www.mercadopago.com.mx/'], {
    testSelfTest: false,
    expectedRuns: 2,
});
