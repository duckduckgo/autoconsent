import generateCMPTests from '../playwright/runner';

generateCMPTests('guesty', [
    'https://fcmhomes.guestybookings.com/en',
    'https://www.stargatemotel.com/en',
    'https://www.cometomiami.com/en',
    'https://www.abode.co/en',
]);
