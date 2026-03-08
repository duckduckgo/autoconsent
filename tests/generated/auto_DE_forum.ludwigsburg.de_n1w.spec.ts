import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_forum.ludwigsburg.de_n1w', ['https://forum.ludwigsburg.de/forum,Lde/start.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
