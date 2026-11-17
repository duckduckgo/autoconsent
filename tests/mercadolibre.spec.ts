import generateCMPTests from '../playwright/runner';

generateCMPTests('mercadolibre', [
    'https://www.mercadolibre.com.ve/',
    'https://www.mercadolibre.com.ar/',
    'https://www.mercadolibre.com.mx/',
    'https://www.mercadolivre.com.br/',
]);
