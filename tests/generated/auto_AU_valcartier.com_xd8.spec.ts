import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_valcartier.com_xd8', ['https://www.valcartier.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
