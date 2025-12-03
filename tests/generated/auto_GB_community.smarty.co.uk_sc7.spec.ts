import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_community.smarty.co.uk_sc7', ['https://community.smarty.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
