import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_scalemodelshop.co.uk_6jw', ['https://www.scalemodelshop.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
