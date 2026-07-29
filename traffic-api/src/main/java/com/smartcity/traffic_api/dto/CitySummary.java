package com.smartcity.traffic_api.dto;

public record CitySummary(
        String CITY,
        Long TOTAL_EVENTS,
        Double AVG_TRAFFIC_VOLUME,
        Double AVG_SPEED,
        Double AVG_TRAVEL_TIME_INDEX,
        Double AVG_CAPACITY_UTILIZATION,
        Double AVG_PUBLIC_TRANSPORT_USAGE,
        Long TOTAL_INCIDENTS
) {}