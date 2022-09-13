import generateCMPTests from "../playwright/runner";

// FIXME: the popup closes too fast, before sending the success report
generateCMPTests('privacymanager.io', [
    // 'https://linuxhint.com/',
    // 'https://www.immmo.at/',
    // 'https://eckart.net/gb/en/',
    // 'https://www.actega.com/emea/en/',
]);
