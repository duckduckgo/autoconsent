import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_modellbahnshop-lippe.com_wgj', ['https://www.modellbahnshop-lippe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
