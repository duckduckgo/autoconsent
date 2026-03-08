import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_aiskillshub.org.uk_yn1', ['https://aiskillshub.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
