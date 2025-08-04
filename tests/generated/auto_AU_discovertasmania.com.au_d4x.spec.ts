import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_discovertasmania.com.au_d4x', ['https://www.discovertasmania.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
