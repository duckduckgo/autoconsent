import generateCMPTests from '../playwright/runner';

generateCMPTests('transcend-airgap', ['https://www.verizon.com/support/account-pin-faqs/'], {
    skipRegions: [],
    onlyRegions: [],
});
