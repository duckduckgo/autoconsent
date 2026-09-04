import generateCMPTests from '../playwright/runner';

// quba.com has a Decline button; fallerstore.nl only offers Settings, so the opt-out goes through the settings modal.
generateCMPTests('mirasvit-gdpr', ['https://www.quba.com/all-sailcloth/homeware-and-sailcloth/bags', 'https://www.fallerstore.nl/'], {
    testOptIn: false,
});

// Older markup without the modal wrapper class. The consent cookie is written too late for the self test.
generateCMPTests('mirasvit-gdpr', ['https://www.autopflege-shop.de/'], {
    testOptIn: false,
    testSelfTest: false,
});
