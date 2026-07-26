create or replace warehouse DATA_LOAD_WH
with
    warehouse_size = 'XSMALL'
    auto_suspend = 60
    auto_resume = TRUE
    initially_suspended = TRUE;

create or replace warehouse COMPUTE_WH
with
    warehouse_size = 'XSMALL'
    auto_suspend = 60
    auto_resume = TRUE
    initially_suspended = TRUE;

create or replace database traffic_intelligence_db;

create or replace schema traffic_intelligence_db.bronze;
create or replace schema traffic_intelligence_db.silver;
create or replace schema traffic_intelligence_db.gold;

use warehouse DATA_LOAD_WH;
use database traffic_intelligence_db;
use schema bronze;