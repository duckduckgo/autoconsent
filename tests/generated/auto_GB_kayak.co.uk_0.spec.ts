import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kayak.co.uk_0', ['https://www.kayak.co.uk/?ispredir=true'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
