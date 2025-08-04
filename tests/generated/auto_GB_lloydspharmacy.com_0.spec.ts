import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lloydspharmacy.com_0', ['https://lloydspharmacy.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
