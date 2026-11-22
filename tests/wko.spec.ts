import generateCMPTests from '../playwright/runner';

// the banner is only created after the first mouse move, scroll, focus or touch
generateCMPTests('wko', ['https://www.wko.at/', 'https://www.wifi.at/', 'https://www.kmudigital.at/', 'https://www.go-international.at/'], {
    simulateUserInteraction: true,
});
