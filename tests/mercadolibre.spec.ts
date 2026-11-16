import generateCMPTests from '../playwright/runner';

generateCMPTests('mercadolibre', [
    'https://vendedores.mercadolibre.com.ar/',
    'https://www.mercadolibre.com.ar/',
    'https://www.mercadolivre.com.br/',
    'https://www.mercadolibre.com.mx/',
]);
