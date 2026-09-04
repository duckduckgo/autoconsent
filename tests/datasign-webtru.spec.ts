import generateCMPTests from '../playwright/runner';

// Reject/Agree flavor of the summary dialog, shown in every region.
generateCMPTests('datasign-webtru', ['https://skyticket.com/'], {
    testOptIn: false,
});

// Same flavor, but the dialog is only delivered to European visitors.
generateCMPTests('datasign-webtru', ['https://www.nikkei.com/article/DGXZQOUD181W80Y5A810C2000000/'], {
    onlyRegions: ['GB', 'DE'],
    testOptIn: false,
});

// Flavors without an Agree button: an explicit reject-all button, and a dialog whose only
// dismissal is the close icon. Both are delivered to Japanese visitors only.
generateCMPTests('datasign-webtru', ['https://www.bridgestone.co.jp/', 'https://www.billboard-japan.com/'], {
    onlyRegions: ['JP'],
    testOptIn: false,
});
