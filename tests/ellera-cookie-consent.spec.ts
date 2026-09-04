import generateCMPTests from '../playwright/runner';

generateCMPTests('ellera-cookie-consent', [
    'https://www.maurten.com/products/gel-100-caf-100-box-us',
    'https://nysci.org/',
    'https://www.dzb-bank.de/',
    'https://www.berghof-foundation.org/',
    // custom template with a dedicated "only necessary" button
    'https://www.koma-modular.cz/',
    // custom template without the "Save" button, so the opt-out goes through #elc-accept-link
    'https://www.marcelwanders.com/',
]);

// custom template that keeps the banner in the DOM after submitting, so the self-test cannot pass
generateCMPTests('ellera-cookie-consent', ['https://europatype.com/'], {
    testSelfTest: false,
});
