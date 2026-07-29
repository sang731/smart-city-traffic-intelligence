package com.smartcity.traffic_api.service;

import com.smartcity.traffic_api.dto.CitySummary;
import com.smartcity.traffic_api.dto.AreaCongestion;
import com.smartcity.traffic_api.dto.EnvironmentalImpact;
import com.smartcity.traffic_api.dto.IncidentSummary;
import com.smartcity.traffic_api.dto.PeakHours;

import java.util.List;

public interface DashboardService {
    List<CitySummary> getCitySummary();
    List<AreaCongestion> getCongestion();
    List<PeakHours> getPeakHours();
    List<EnvironmentalImpact> getEnvironmentalImpact();
    List<IncidentSummary> getIncidentSummary();
}