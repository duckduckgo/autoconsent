import generateCMPTests from '../playwright/runner';

const urls = [
    'https://www.showroomprive.com/',
    'https://www.showroomprive.es/',
    'https://www.showroomprive.nl/',
    'https://www.saldiprivati.com/',
];

generateCMPTests('showroomprive', urls, {
    // desktop banner reloads the page after a choice, so the self-test never runs
    testSelfTest: false,
});
generateCMPTests('showroomprive', urls, { mobile: true });
