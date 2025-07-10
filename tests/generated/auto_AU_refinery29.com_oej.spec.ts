import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_refinery29.com_oej', ['https://www.refinery29.com/en-au'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
