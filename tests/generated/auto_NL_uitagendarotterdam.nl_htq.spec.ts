import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_uitagendarotterdam.nl_htq', ['https://www.uitagendarotterdam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
