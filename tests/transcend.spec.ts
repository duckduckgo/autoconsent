import generateCMPTests from '../playwright/runner';

generateCMPTests('transcend', ['https://www.verizon.com/support/account-pin-faqs/'], {
    onlyRegions: ['US'],
});

// closed shadow root: the opt-in button is not reachable
generateCMPTests('transcend', ['https://www.vsp.com/', 'https://support.1password.com/'], {
    testOptIn: false,
});
