import generateCMPTests from '../playwright/runner';

generateCMPTests('mercadolibre', [
    'https://vendedores.mercadolibre.com.mx/',
    'https://www.mercadolibre.com.mx/',
    'https://www.mercadolivre.com.br/',
]);

// the page's main thread stays busy long after saving, so the self-test answer arrives too late
generateCMPTests('mercadolibre', ['https://www.mercadopago.com.mx/'], {
    testSelfTest: false,
});
