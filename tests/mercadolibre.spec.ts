import generateCMPTests from '../playwright/runner';

// opt-out finishes in the preferences iframe (mercadolibre-frame), which reports its own autoconsentDone
const options = { expectedRuns: 2 };

generateCMPTests(
    'mercadolibre',
    [
        'https://www.mercadolibre.com.ar/',
        'https://www.mercadopago.com.br/',
        'https://www.mercadolivre.com.br/',
        'https://www.mercadolibre.com.mx/',
        'https://www.mercadolibre.com.uy/',
        'https://www.mercadolibre.com.ve/',
        // the preferences iframe is cross-origin on these subdomains
        'https://vendedores.mercadolibre.cl/',
        'https://vendedores.mercadolibre.com.ar/',
    ],
    options,
);

// Saving preferences freezes the page main thread for 10-45s in headless Chrome, exceeding the test timeout.
generateCMPTests('mercadolibre', ['https://www.mercadopago.com.ar/'], { ...options, testOptOut: false });

// page screenshots time out on this site, which delays the self-test past the runner's wait
generateCMPTests('mercadolibre', ['https://www.mercadopago.com.mx/'], {
    ...options,
    testSelfTest: false,
});
