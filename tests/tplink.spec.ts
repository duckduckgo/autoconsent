import generateCMPTests from '../playwright/runner';

generateCMPTests('tplink', [
    'https://www.tp-link.com/nl/',
    'https://www.tp-link.com/us/',
    'https://www.tp-link.com/us/home-networking/wifi-router/tl-wr3602be/',
    'https://www.omadanetworks.com/us/',
]);

// opting out reloads the page, which interrupts the self-test
generateCMPTests('tplink', ['https://www.kasasmart.com/us'], {
    testSelfTest: false,
});
