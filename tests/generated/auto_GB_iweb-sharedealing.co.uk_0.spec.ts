import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_iweb-sharedealing.co.uk_0', ['https://www.iweb-sharedealing.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
