import generateCMPTests from '../playwright/runner';

generateCMPTests('nuxt-cookie-control', [
    'https://kida-mnesia.com/',
    'https://lima-airport.com/',
    'https://infinitecampus.com/',
    'https://livestorm.co/',
]);

// v1 (Nuxt 2) reloads the page after saving consent, so the self-test runs on a fresh page
generateCMPTests('nuxt-cookie-control', ['https://nvpa.org/', 'https://leanpay.si/'], {
    testSelfTest: false,
});
