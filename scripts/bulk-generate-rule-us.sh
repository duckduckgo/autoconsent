#!/bin/bash
set -e

SCRIPT_DIR="`dirname $0`"
DATA_FILE="${SCRIPT_DIR}/../generate-rule-data/us.txt"

# Check if minimum required arguments are provided
if [ "$#" -lt 1 ]; then
    echo "Usage: $0 <concurrency>"
    exit 1
fi

concurrency="$1"

# Validate inputs
if ! [[ "$concurrency" =~ ^[0-9]+$ ]]; then
    echo "Concurrency must be a positive integer"
    exit 1
fi

# Read URLs from file, taking specified number of lines
domains=($(cat "$DATA_FILE"))

# Process domain with generate-rule
process_domain() {
    local domain="$1"
    echo "Processing $domain"
    npx ts-node "$SCRIPT_DIR/generate-rule/main.ts" "$domain"
}

# Process all domains maintaining maximum concurrent processes
for domain in "${domains[@]}"; do
    # Wait if we already have maximum number of background processes
    while [ $(jobs -r | wc -l) -ge "$concurrency" ]; do
        sleep 1
    done

    # Process domain in background
    process_domain "$domain" &
done

# Wait for all remaining background processes to complete
wait

echo "Completed processing $(wc -l < "$DATA_FILE") domains"
