import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_expeditie.vrijbuiter.nl_4em', ['https://expeditie.vrijbuiter.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
