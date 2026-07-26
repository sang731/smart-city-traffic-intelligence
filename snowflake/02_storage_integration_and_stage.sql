create or replace storage integration traffic_intelligence_s3
  type=external_stage
  storage_provider=s3
  enabled=true
  storage_aws_role_arn='arn:aws:iam::601102828453:role/snowflake-s3-role'
  storage_allowed_locations=('s3://traffic-intelligence-bronze-bucket');

desc storage integration traffic_intelligence_s3;

create or replace file format json_file_format
type='json'
strip_outer_array=false
ignore_utf8_errors=true;

create or replace stage traffic_data_bronze_stage
url='s3://traffic-intelligence-bronze-bucket/bronze/'
storage_integration=traffic_intelligence_s3
file_format=json_file_format;

show file formats;
list @traffic_data_bronze_stage;