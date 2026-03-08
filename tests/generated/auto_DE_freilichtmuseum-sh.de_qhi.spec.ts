import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_freilichtmuseum-sh.de_qhi', ['https://freilichtmuseum-sh.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
