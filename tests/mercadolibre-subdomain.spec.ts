import generateCMPTests from '../playwright/runner';

// The settings iframe on these subdomains is cross-origin, so opt-out also completes mercadolibre-frame inside it.
const frameRuleAlsoCompletes = { expectedRuns: 2 };

generateCMPTests(
    'mercadolibre-subdomain',
    [
        'https://vendedores.mercadolibre.com.ar/',
        'https://vendedores.mercadolivre.com.br/',
        'https://vendedores.mercadolibre.com.mx/',
        'https://developers.mercadolibre.com.ar/',
    ],
    frameRuleAlsoCompletes,
);
