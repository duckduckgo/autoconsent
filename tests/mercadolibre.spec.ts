import generateCMPTests from '../playwright/runner';

generateCMPTests('mercadolibre', [
    'https://www.mercadolibre.com.uy/',
    'https://www.mercadolibre.com.ar/',
    'https://www.mercadolivre.com.br/',
    'https://www.mercadolibre.com.mx/',
    'https://www.mercadopago.com.br/',
]);
