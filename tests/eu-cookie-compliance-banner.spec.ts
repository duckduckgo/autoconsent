import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-banner', ['https://healthcare.utah.edu/', 'https://www.freedompass.org/']);

// notice-only variant without a reject button
generateCMPTests('eu-cookie-compliance-banner', ['https://www.glengery.com/brick-catalog/53dd-paver', 'https://www.usccb.org/']);
