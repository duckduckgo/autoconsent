import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_jigsawpuzzlesdirect.co.uk_6o5', ['https://www.jigsawpuzzlesdirect.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
