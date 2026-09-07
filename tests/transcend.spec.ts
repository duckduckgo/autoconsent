import generateCMPTests from '../playwright/runner';

generateCMPTests('transcend', ['https://www.verizon.com/support/account-pin-faqs/']);

// Costco's own consent UI is built on top of Transcend's airgap.js. Opting in is not
// testable: airgap only accepts consent changes from trusted events, so a scripted click
// on "Accept All Cookies" is rejected.
generateCMPTests('transcend', ['https://www.costco.ca/', 'https://www.costcobusinesscentre.ca/'], {
    testOptIn: false,
});
