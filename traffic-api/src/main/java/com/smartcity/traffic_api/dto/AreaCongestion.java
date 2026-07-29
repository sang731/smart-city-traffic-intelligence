package com.smartcity.traffic_api.dto;

public record AreaCongestion(
        String CITY,
        String AREA,
        String ROAD_NAME,
        String CONGESTION_LEVEL,
        Double AVG_TRAFFIC,
        Double AVG_SPEED,
        Double AVG_TRAVEL_TIME_INDEX,
        Double CAPACITY_UTILIZATION,
        Long TOTAL_EVENTS
) {}
