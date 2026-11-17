import generateCMPTests from '../playwright/runner';

generateCMPTests('mercadolibre', ['https://www.mercadolibre.com.mx/', 'https://www.mercadolivre.com.br/']);

// page screenshots time out on this site, which delays the self-test past the runner's wait
generateCMPTests('mercadolibre', ['https://www.mercadopago.com.mx/'], {
    testSelfTest: false,
});
