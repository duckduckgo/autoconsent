import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pillowtalk.com.au_c5s', ['https://www.pillowtalk.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
