import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_eprovide.mapi-trust.org_iuw', ['https://eprovide.mapi-trust.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
