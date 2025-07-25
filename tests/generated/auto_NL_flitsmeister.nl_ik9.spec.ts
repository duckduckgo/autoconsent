import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_flitsmeister.nl_ik9', ['https://www.flitsmeister.nl/?consentId=9c2e0605-3f88-45f8-a762-2dd5851f7b32'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
