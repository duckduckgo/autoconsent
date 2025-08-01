import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_methodist.org.uk_0', ['https://www.methodist.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
