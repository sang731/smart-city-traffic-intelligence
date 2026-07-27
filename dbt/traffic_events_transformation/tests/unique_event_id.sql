SELECT EVENT_ID, COUNT(*) AS CNT
FROM {{ ref('traffic_events_clean') }}
GROUP BY EVENT_ID
HAVING COUNT(*) > 1