import generateCMPTests from '../playwright/runner';

generateCMPTests('transcend', ['https://www.verizon.com/support/account-pin-faqs/']);

// Transcend can render its banner in a closed shadow root, which no selector can reach.
// Only the cosmetic opt-out applies there, so opt-in is not testable.
generateCMPTests('transcend', ['https://1password.com/'], { testOptIn: false });
