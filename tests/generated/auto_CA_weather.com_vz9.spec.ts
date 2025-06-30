import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CA_weather.com_vz9',
    ['https://weather.com/en-CA/weather/today/l/584018bec07ce9573837c14fa59da031fa6fcdeb1c3c9e3b2b27cb79ce254b5a?Goto=Redirected'],
    { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] },
);
