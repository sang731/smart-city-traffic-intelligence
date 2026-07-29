package com.smartcity.traffic_api.dto;

import java.time.LocalDateTime;

public record IncidentSummary(
        String CITY,
        String AREA,
        String ROAD_NAME,
        long TOTAL_INCIDENTS,
        Double AVG_TRAFFIC,
        Double AVG_SPEED,
        LocalDateTime LAST_INCIDENT_TIME
){}
