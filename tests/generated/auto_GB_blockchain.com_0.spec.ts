import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_blockchain.com_0', ['https://www.blockchain.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
