import generateCMPTests from '../playwright/runner';

generateCMPTests('epaas', ['https://www.bmw.de/de/index.html', 'https://www.mini.co.uk/en_GB/home.html']);

// No explicit reject button outside the EEA: opt-out goes through the "customise" layer.
generateCMPTests('epaas', ['https://www.mini.jp/ja_JP/home.html'], { testOptIn: false });

// Opt-out-by-default variant: marketing pre-enabled in the "customise" layer, saved with "Continue".
generateCMPTests('epaas', ['https://www.bmw.com.au/en/index.html', 'https://www.mini.com.au/', 'https://www.bmw.co.nz/']);
