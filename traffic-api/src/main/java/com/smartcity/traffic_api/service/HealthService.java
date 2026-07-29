package com.smartcity.traffic_api.service;

import com.smartcity.traffic_api.dto.HealthResponse;
import com.smartcity.traffic_api.repository.HealthRepository;
import org.springframework.stereotype.Service;

@Service
public class HealthService {
    private final HealthRepository repository;

    public HealthService(HealthRepository repository) {
        this.repository = repository;
    }

    public HealthResponse health() {
        return new HealthResponse(
                "UP", repository.currentDatabase(),
                repository.currentWarehouse(), repository.currentSchema()
        );
    }
}