import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_app.business.just-eat.co.uk_wco', ['https://app.business.just-eat.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
