import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_uitagendarotterdam.nl_aon', ['https://www.uitagendarotterdam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
