import generateCMPTests from '../playwright/runner';

// Opt-out also runs mercadolibre-frame inside the cross-origin settings iframe; it is intermediate, so only this rule reports done.
generateCMPTests('mercadolibre-subdomain', [
    'https://vendedores.mercadolibre.com.ar/',
    'https://vendedores.mercadolivre.com.br/',
    'https://vendedores.mercadolibre.com.mx/',
    'https://developers.mercadolibre.com.ar/',
    'https://developers.mercadolibre.com.mx/',
]);
