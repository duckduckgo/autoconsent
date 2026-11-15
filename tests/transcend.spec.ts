import generateCMPTests from '../playwright/runner';

// open shadow root, notice shown only in the US
generateCMPTests('transcend', ['https://www.verizon.com/support/account-pin-faqs/'], {
    onlyRegions: ['US'],
});

// closed shadow root: opt-in clicks cannot reach the buttons
generateCMPTests('transcend', ['https://medicine.immortals.com/auth/sign-up', 'https://www.anaconda.com/'], {
    testOptIn: false,
});

// banner shown in GDPR regions only
generateCMPTests('transcend', ['https://www.grammarly.com/', 'https://www.gofundme.com/'], {
    testOptIn: false,
    skipRegions: ['US'],
});
