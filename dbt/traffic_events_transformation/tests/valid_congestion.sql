SELECT * FROM {{ ref('traffic_events_clean') }}
WHERE CONGESTION_LEVEL NOT IN ('Low','Medium','High')