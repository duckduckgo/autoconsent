import generateCMPTests from '../playwright/runner';

// Full opt-out / self-test where TIME typically shows the GDPR-style Ketch banner.
generateCMPTests('time-com-ketch', ['https://time.com/'], {
    onlyRegions: ['DE', 'FR', 'GB', 'NL', 'CH', 'NO'],
});

// In the US (and similar regions) TIME often loads Ketch without surfacing a dialog
// in automation; still verify the CMP is detected from the boot script.
generateCMPTests('time-com-ketch', ['https://time.com/'], {
    skipRegions: ['DE', 'FR', 'GB', 'NL', 'CH', 'NO'],
    expectPopupOpen: false,
    testSelfTest: false,
});
