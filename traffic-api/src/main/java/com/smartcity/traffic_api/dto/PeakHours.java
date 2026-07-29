package com.smartcity.traffic_api.dto;

public record PeakHours(
        String TIMEBLOCK,
        String CITY,
        long TOTAL_EVENTS,
        Double AVG_TRAFFIC,
        Double AVG_SPEED,
        Double AVG_DELAY,
        long INCIDENTS
){}
