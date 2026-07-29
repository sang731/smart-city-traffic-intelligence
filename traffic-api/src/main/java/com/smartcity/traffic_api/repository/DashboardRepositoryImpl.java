package com.smartcity.traffic_api.repository;

import com.smartcity.traffic_api.dto.*;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DashboardRepositoryImpl implements DashboardRepository {
    private final JdbcClient jdbcClient;

    public DashboardRepositoryImpl(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    @Override
    public List<CitySummary> getCitySummary() {
        String sql = """
        SELECT CITY,TOTAL_EVENTS,AVG_TRAFFIC_VOLUME,AVG_SPEED,
            AVG_TRAVEL_TIME_INDEX, AVG_CAPACITY_UTILIZATION,
            AVG_PUBLIC_TRANSPORT_USAGE,TOTAL_INCIDENTS
        FROM MART_CITY_SUMMARY
        ORDER BY TOTAL_EVENTS DESC
        """;
        return jdbcClient.sql(sql).query(CitySummary.class).list();
    }

    @Override
    public List<AreaCongestion> getCongestion() {
        String sql = """
        SELECT CITY,AREA,ROAD_NAME,CONGESTION_LEVEL,AVG_TRAFFIC,
            AVG_SPEED,AVG_TRAVEL_TIME_INDEX,
            CAPACITY_UTILIZATION,TOTAL_EVENTS
        FROM MART_CONGESTION
        ORDER BY AVG_TRAFFIC DESC
        """;
        return jdbcClient.sql(sql).query(AreaCongestion.class).list();
    }

    @Override
    public List<PeakHours> getPeakHours() {
        String sql = """
        SELECT TIMEBLOCK,CITY,TOTAL_EVENTS,AVG_TRAFFIC,
            AVG_SPEED,AVG_DELAY,INCIDENTS
        FROM MART_PEAK_HOURS
        ORDER BY TOTAL_EVENTS DESC
        """;
        return jdbcClient.sql(sql).query(PeakHours.class).list();
    }

    @Override
    public List<EnvironmentalImpact> getEnvironmentalImpact() {

        String sql = """
        SELECT CITY,AREA,AVG_ENVIRONMENTAL_IMPACT,
            AVG_PUBLIC_TRANSPORT,AVG_PARKING,
            AVG_PEDESTRIAN_COUNT,AVG_SIGNAL_COMPLIANCE
        FROM MART_ENVIRONMENTAL_IMPACT
        ORDER BY AVG_ENVIRONMENTAL_IMPACT DESC
        """;

        return jdbcClient.sql(sql).query(EnvironmentalImpact.class).list();
    }

    @Override
    public List<IncidentSummary> getIncidentSummary() {

        String sql = """
        SELECT CITY,AREA,ROAD_NAME,TOTAL_INCIDENTS,
            AVG_TRAFFIC,AVG_SPEED,LAST_INCIDENT_TIME
        FROM MART_INCIDENT_SUMMARY
        ORDER BY TOTAL_INCIDENTS DESC
        """;
        return jdbcClient.sql(sql).query(IncidentSummary.class).list();
    }
}