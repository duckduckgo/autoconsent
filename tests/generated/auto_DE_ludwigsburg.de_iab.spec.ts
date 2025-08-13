import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ludwigsburg.de_iab', ['https://www.ludwigsburg.de/start.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
