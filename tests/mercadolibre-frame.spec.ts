import generateCMPTests from '../playwright/runner';

// The frame only loads after mercadolibre-subdomain opens the settings modal, so opt-in never reaches it.
generateCMPTests('mercadolibre-frame', ['https://vendedores.mercadolibre.com.ar/', 'https://developers.mercadolibre.com.ar/'], {
    testOptIn: false,
    testSelfTest: false,
    expectedRuns: 2,
});
