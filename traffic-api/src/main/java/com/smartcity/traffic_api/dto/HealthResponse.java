package com.smartcity.traffic_api.dto;

public record HealthResponse(String status, String database,
                             String warehouse,String schema) {}
