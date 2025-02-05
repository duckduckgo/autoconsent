const Ajv = require('ajv').default;
const fs = require('fs');
const path = require('path');

function formatErrors(errors) {
    if (!Array.isArray(errors)) {
        return '';
    }

    return errors.map((item) => `${item.instancePath}: ${item.message}`).join(', ');
}

const schemaPath = path.join(__dirname, '../rules/schema.json');
if (!fs.existsSync(schemaPath)) {
    console.error(`Schema file does not exist at: ${schemaPath}`);
    process.exit(1);
}

const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
const ajv = new Ajv({ allowUnionTypes: true });
const validator = ajv.compile(schema);

const rulesDir = path.join(__dirname, '../rules/autoconsent');
const ruleFiles = fs.readdirSync(rulesDir).filter((f) => f.endsWith('.json'));

for (const ruleFile of ruleFiles) {
    const rulePath = path.join(rulesDir, ruleFile);
    const ruleJson = JSON.parse(fs.readFileSync(rulePath, 'utf8'));

    const valid = validator(ruleJson);
    if (!valid) {
        console.error(`Validation failed for ${ruleFile}:`);
        console.error(formatErrors(validator.errors));
        process.exit(1);
    }
}

console.log('All rules look good!');
