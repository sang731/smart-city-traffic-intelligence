select system$pipe_status('traffic_events_pipe');

select * from table (INFORMATION_SCHEMA.COPY_HISTORY(
        TABLE_NAME => 'RAW_TRAFFIC_EVENTS',
        START_TIME => DATEADD('day', -1, CURRENT_TIMESTAMP())
    )
);
select * from raw_traffic_events order by load_time desc limit 20;