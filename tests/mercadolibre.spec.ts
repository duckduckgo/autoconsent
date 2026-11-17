import generateCMPTests from '../playwright/runner';

generateCMPTests('mercadolibre', [
    'https://www.mercadolibre.com.ar/',
    'https://www.mercadopago.com.br/',
    'https://www.mercadolivre.com.br/',
    'https://www.mercadolibre.com.mx/',
]);

// Saving preferences freezes the page main thread for 10-45s in headless Chrome, exceeding the test timeout.
generateCMPTests('mercadolibre', ['https://www.mercadopago.com.ar/'], { testOptOut: false });
