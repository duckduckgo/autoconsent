import generateCMPTests from '../playwright/runner';

generateCMPTests('burpee.com', [
    // Decline button
    'https://www.discountsurgical.com/',
    'https://www.lymphrx.com/',
    'https://www.cutmy.co.uk/',
    'https://www.workingperson.com/',
    // Manage Cookies button
    'https://www.hobbies.co.uk/',
    // Allow button only: the banner is hidden
    'https://www.oxfordproducts.com/',
    'https://www.testequipmentdepot.com/',
]);
