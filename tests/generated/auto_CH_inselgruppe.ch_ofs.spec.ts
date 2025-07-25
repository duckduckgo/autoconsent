import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_inselgruppe.ch_ofs', ['https://inselgruppe.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
