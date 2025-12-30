
LOG_FILE=${1:-"C:\Users\nikhil\Documents\sample.txt"}

!/bin/bash


IP_LIST=$(grep -oE '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' "$LOG_FILE" | sort | uniq)
echo "ip: $IP_LIST"


# Analyze log file for errors


if [ ! -f "$LOG_FILE" ]; then
    echo "Error: Log file not found: $LOG_FILE"
    exit 1
fi


echo "=== Log Analysis Report ==="
echo "File: $LOG_FILE"


echo "count: $(wc -l < "$LOG_FILE")"
echo "Error count: $(grep -c -i 'error' "$LOG_FILE")"
echo "Warning count: $(grep -c -i 'warning' "$LOG_FILE")"
echo "info count: $(grep -oh -i  'INFO' "$LOG_FILE" | wc -l)"










