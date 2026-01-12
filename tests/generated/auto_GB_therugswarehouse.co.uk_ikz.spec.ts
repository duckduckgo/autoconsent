import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_therugswarehouse.co.uk_ikz', ['https://www.therugswarehouse.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
