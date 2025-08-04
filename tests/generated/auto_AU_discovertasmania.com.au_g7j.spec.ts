import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_discovertasmania.com.au_g7j', ['https://www.discovertasmania.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
