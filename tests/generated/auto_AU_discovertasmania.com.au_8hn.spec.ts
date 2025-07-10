import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_discovertasmania.com.au_8hn', ['https://www.discovertasmania.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
