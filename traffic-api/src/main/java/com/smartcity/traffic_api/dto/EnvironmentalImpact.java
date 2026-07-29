package com.smartcity.traffic_api.dto;

public record EnvironmentalImpact(
        String CITY,
        String AREA,
        Double AVG_ENVIRONMENTAL_IMPACT,
        Double AVG_PUBLIC_TRANSPORT,
        Double AVG_PARKING,
        Double AVG_PEDESTRIAN_COUNT,
        Double AVG_SIGNAL_COMPLIANCE
){}
