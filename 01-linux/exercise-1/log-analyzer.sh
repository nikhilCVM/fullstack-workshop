#!/bin/bash


set -e  


LOG_FILE="${1:-C:/Users/nikhil/Documents/sample.txt}"


if [ ! -f "$LOG_FILE" ]; then
    echo "❌ Error: Log file not found: $LOG_FILE"
    echo "💡 Tip: Provide a valid log file path as an argument."
    exit 1
fi

# Extract unique IP addresses from the log
IP_LIST=$(grep -oE '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' "$LOG_FILE" | sort | uniq)

# Print IP list
echo "=== Unique IP Addresses Detected ==="
echo "$IP_LIST"
echo

# Start log analysis section
echo "=== Log Analysis Report ==="
echo "📄 File analyzed: $LOG_FILE"
echo "----------------------------"

# Count total lines in file
echo "🔢 Total line count: $(wc -l < "$LOG_FILE")"

# Count occurrences of the word 'error' (case-insensitive)
echo "🚨 Error count: $(grep -c -i 'error' "$LOG_FILE")"

# Count occurrences of the word 'warning'
echo "⚠️ Warning count: $(grep -c -i 'warning' "$LOG_FILE")"

# Count INFO occurrences using -o and wc
echo "ℹ️ INFO count: $(grep -o -i 'INFO' "$LOG_FILE" | wc -l)"

echo "----------------------------"
echo "✅ Analysis complete!"
