SELECT * FROM {{ ref('traffic_events_clean') }}
WHERE AVERAGE_SPEED < 0 OR AVERAGE_SPEED > 150