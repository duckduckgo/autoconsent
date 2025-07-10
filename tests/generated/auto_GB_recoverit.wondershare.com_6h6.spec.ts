import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_recoverit.wondershare.com_6h6', ['https://recoverit.wondershare.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
