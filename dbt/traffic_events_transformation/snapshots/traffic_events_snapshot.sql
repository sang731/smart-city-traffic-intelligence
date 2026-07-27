{% snapshot traffic_events_snapshot %}

{{
    config(target_schema='SNAPSHOTS',unique_key='EVENT_ID',strategy='timestamp',updated_at='LOAD_TIME')
}}

SELECT * FROM {{ ref('traffic_events_clean') }}

{% endsnapshot %}