
create role developer;
create role data_analyst;

show roles;

grant usage on warehouse data_load_wh to role developer;
grant operate on warehouse data_load_wh to role developer;
grant usage on warehouse compute_wh to role developer;
grant usage on warehouse compute_wh to role data_analyst;

grant usage on database traffic_intelligence_db to role developer;
grant usage on database traffic_intelligence_db to role data_analyst;

grant usage on all schemas in database traffic_intelligence_db to role developer;
grant usage on schema traffic_intelligence_db.gold to role data_analyst;

grant select, insert, update, delete on all tables in schema traffic_intelligence_db.silver to role developer;
grant select on all tables in schema traffic_intelligence_db.gold to role data_analyst;

grant select on future tables in schema traffic_intelligence_db.gold to role data_analyst;