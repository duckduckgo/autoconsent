import generateCMPTests from "../playwright/runner";

generateCMPTests('privacymanager.io', [
    'https://linuxhint.com/',
    'https://www.immmo.at/',
    'https://eckart.net/gb/en/',
    'https://www.actega.com/emea/en/',
]);
