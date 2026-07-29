package com.smartcity.traffic_api.repository;

import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.simple.JdbcClient;

@Repository
public class HealthRepository {
    private final JdbcClient jdbcClient;

    public HealthRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    public String currentDatabase() {
        return jdbcClient.sql("SELECT CURRENT_DATABASE()").query(String.class).single();
    }

    public String currentWarehouse() {
        return jdbcClient.sql("SELECT CURRENT_WAREHOUSE()").query(String.class).single();
    }

    public String currentSchema() {
        return jdbcClient.sql("SELECT CURRENT_SCHEMA()").query(String.class).single();
    }
}
