import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_decoaudioshop.co.uk_57y', ['https://decoaudioshop.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
