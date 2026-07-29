package com.smartcity.traffic_api.controller;

import com.smartcity.traffic_api.dto.HealthResponse;
import com.smartcity.traffic_api.service.HealthService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/health")
public class HealthController {
    private final HealthService service;

    public HealthController(HealthService service) {
        this.service = service;
    }

    @GetMapping("/db")
    public HealthResponse databaseHealth() {
        return service.health();
    }
}
