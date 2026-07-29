package com.smartcity.traffic_api.controller;

import com.smartcity.traffic_api.dto.*;
import com.smartcity.traffic_api.service.DashboardService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1/dashboard")
@Tag(name = "Dashboard API", description = "Traffic Intelligence Dashboard APIs")
public class DashboardController {
    private final DashboardService service;

    public DashboardController(DashboardService service) {
        this.service = service;
    }

    @Operation(summary = "City Summary")
    @GetMapping("/city-summary")
    public ResponseEntity<ApiResponse<List<CitySummary>>> getCitySummary() {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        LocalDateTime.now(),
                        "City Summary Retrieved Successfully",
                        service.getCitySummary()
                )
        );
    }

    @Operation(summary = "Congestion Analytics")
    @GetMapping("/congestion-analytics")
    public ResponseEntity<ApiResponse<List<AreaCongestion>>> getCongestion() {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        LocalDateTime.now(),
                        "Congestion Data Retrieved Successfully",
                        service.getCongestion()
                )
        );
    }

    @Operation(summary = "Peak Hour Analytics")
    @GetMapping("/peak-hours")
    public ResponseEntity<ApiResponse<List<PeakHours>>> getPeakHours() {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        LocalDateTime.now(),
                        "Peak Hour Data Retrieved Successfully",
                        service.getPeakHours()
                )
        );
    }

    @Operation(summary = "Environmental Impact")
    @GetMapping("/environmental-impact")
    public ResponseEntity<ApiResponse<List<EnvironmentalImpact>>> getEnvironment() {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        LocalDateTime.now(),
                        "Environmental Impact Retrieved Successfully",
                        service.getEnvironmentalImpact()
                )
        );
    }

    @Operation(summary = "Incident Summary")
    @GetMapping("/incidents")
    public ResponseEntity<ApiResponse<List<IncidentSummary>>> getIncidentSummary() {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        LocalDateTime.now(),
                        "Incident Summary Retrieved Successfully",
                        service.getIncidentSummary()
                )
        );
    }
}