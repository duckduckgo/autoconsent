import generateCMPTests from '../playwright/runner';

generateCMPTests('alertnotification-alert-bar', [
    'https://www.defencebank.com.au/',
    'https://www.peoplecare.com.au/',
    'https://www.onemedifund.com.au/',
    'https://www.myrbhs.com.au/',
    'https://www.policehealth.com.au/',
    'https://www.vegkit.com.au/',
    'https://www.thegoodmoodfood.com.au/',
]);
