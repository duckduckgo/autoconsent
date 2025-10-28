import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pillowtalk.com.au_1u0', ['https://www.pillowtalk.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
