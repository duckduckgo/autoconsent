import generateCMPTests from '../playwright/runner';

generateCMPTests('epaas', ['https://www.bmw.de/de/index.html', 'https://www.mini.co.uk/en_GB/home.html']);

// No explicit reject button outside the EEA: opt-out goes through the "customise" layer.
generateCMPTests('epaas', ['https://www.mini.jp/ja_JP/home.html'], { testOptIn: false });
