import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_onlinedoctor.lloydspharmacy.com_0', ['https://onlinedoctor.lloydspharmacy.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
