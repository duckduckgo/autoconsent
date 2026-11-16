import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'mercadolibre',
    [
        'https://vendedores.mercadolivre.com.br/',
        'https://www.mercadolibre.com.ar/',
        'https://www.mercadolibre.com.mx/',
        'https://www.mercadopago.com.br/',
    ],
    {
        expectedRuns: 2,
    },
);
