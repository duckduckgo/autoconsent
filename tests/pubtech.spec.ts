import generateCMPTests from '../playwright/runner';

generateCMPTests('pubtech', [
    'https://www.telefonino.net/',
    'https://www.agrigentooggi.it/',
    'https://blog.cliomakeup.com/',
    'https://www.leccenews24.it/',
    'https://www.youmath.it/',
]);

// the page reloads after rejecting, so the self-test never runs
generateCMPTests('pubtech', ['https://www.chimica-online.it/'], {
    testSelfTest: false,
});
