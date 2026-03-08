import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_andysbetclub.co.uk_tss', ['https://andysbetclub.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
