import generateCMPTests from '../playwright/runner';

generateCMPTests('guesty', [
    'https://goodliferesorts.guestybookings.com/en',
    'https://heavenlyhosts.guestybookings.com/en',
    'https://superstays.guestybookings.com/en',
]);
