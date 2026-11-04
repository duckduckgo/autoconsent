import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-banner', ['https://www.mannheim.de/', 'https://www.aa.org/', 'https://www.bto.org/']);

// Popup without the body class, rejected via the categories "Decline" button
generateCMPTests('eu-cookie-compliance-banner', ['https://www.topuniversities.com/']);
