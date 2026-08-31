import generateCMPTests from '../playwright/runner';

generateCMPTests('cookiesdirective', [
    // implied consent variant: only an "accept"/dismiss button
    'https://www.asd-ste100.org/',
    // explicit consent variant: reject button next to accept
    'https://carsystemsrl.it/',
    'https://www.technikmuseum-puetnitz.de/',
]);
