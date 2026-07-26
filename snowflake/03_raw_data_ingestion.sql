use warehouse DATA_LOAD_WH;
use database  traffic_intelligence_db;
use schema bronze;

create or replace table raw_traffic_events(
    raw_data variant,
    source_file string,
    file_row_number number,
    load_time timestamp default current_timestamp()
);
show tables like 'raw%';

create or replace pipe traffic_events_pipe
auto_ingest=true as
copy into raw_traffic_events(raw_data,source_file,file_row_number) from (
    select $1,METADATA$FILENAME,METADATA$FILE_ROW_NUMBER from @traffic_data_bronze_stage
)
file_format=(format_name=json_file_format)
on_error=continue;