import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_flitsmeister.nl_gg2', ['https://www.flitsmeister.nl/?consentId=78e8874f-25b4-484a-8a11-3581f275d8b2'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
