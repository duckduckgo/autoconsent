import Ajv, { ErrorObject } from 'ajv';
import { readdirSync, readFileSync, existsSync } from 'fs';
import path from 'path';

function formatErrors(errors: ErrorObject[]) {
    if (!Array.isArray(errors)) {
        return '';
    }
    return errors.map((item) => `${item.instancePath}: ${item.message}`).join(', ');
}

const schemaPath = path.join(__dirname, '../rules/schema.json');
if (!existsSync(schemaPath)) {
    console.error(`Schema file does not exist at: ${schemaPath}`);
    process.exit(1);
}

const schema = JSON.parse(readFileSync(schemaPath, 'utf8'));
const ajv = new Ajv({ allowUnionTypes: true });
const validator = ajv.compile(schema);

const rulesDir = path.join(__dirname, '../rules/autoconsent');
const ruleFiles = readdirSync(rulesDir).filter((f) => f.endsWith('.json'));

for (const ruleFile of ruleFiles) {
    const rulePath = path.join(rulesDir, ruleFile);
    const ruleJson = JSON.parse(readFileSync(rulePath, 'utf8'));

    const valid = validator(ruleJson);
    if (!valid) {
        console.error(`Validation failed for ${ruleFile}:`);
        console.error(formatErrors(validator.errors));
        process.exit(1);
    }
}

console.log('All rules look good!');
