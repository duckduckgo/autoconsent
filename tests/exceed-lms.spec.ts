import generateCMPTests from '../playwright/runner';

generateCMPTests('exceed-lms', [
    'https://edu.exceedlms.com/',
    'https://www.facebookblueprint.com/',
    'https://www.mailchimpacademy.com/',
    'https://www.aaaeducation.org/',
]);
