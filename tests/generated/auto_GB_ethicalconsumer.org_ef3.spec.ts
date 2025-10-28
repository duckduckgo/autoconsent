import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ethicalconsumer.org_ef3', ['https://www.ethicalconsumer.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
