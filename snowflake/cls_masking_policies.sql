create or replace masking policy incident_masked as (val string) returns string ->
case
    when current_role() in ('developer','ACCOUNTADMIN') then val
    else 'REDACTED'
end;