import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_designmycase.co.uk_n9y', ['https://designmycase.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
