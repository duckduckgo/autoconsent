import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_courierexchange.co.uk_heq', ['https://courierexchange.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
