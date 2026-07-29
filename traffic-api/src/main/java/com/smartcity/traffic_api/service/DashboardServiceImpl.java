package com.smartcity.traffic_api.service;

import com.smartcity.traffic_api.dto.CitySummary;
import com.smartcity.traffic_api.dto.AreaCongestion;
import com.smartcity.traffic_api.dto.EnvironmentalImpact;
import com.smartcity.traffic_api.dto.IncidentSummary;
import com.smartcity.traffic_api.dto.PeakHours;
import com.smartcity.traffic_api.repository.DashboardRepository;
import org.springframework.stereotype.Service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DashboardServiceImpl implements DashboardService {
    private static final Logger logger = LoggerFactory.getLogger(DashboardServiceImpl.class);
    private final DashboardRepository repository;

    public DashboardServiceImpl(DashboardRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<CitySummary> getCitySummary() {
        List<CitySummary> cities=repository.getCitySummary();
        if (cities.isEmpty()) {
            throw new IllegalArgumentException("No city summary data available.");
        }
        logger.info("Returned {} records", cities.size());
        return cities;
    }

    @Override
    @Transactional(readOnly = true)
    public List<AreaCongestion> getCongestion() {
        List<AreaCongestion> congestion= repository.getCongestion();
        if(congestion.isEmpty()){
            throw new IllegalArgumentException("No Congestion data available.");
        }
        logger.info("Returned {} records", congestion.size());
        return congestion;
    }

    @Override
    @Transactional(readOnly = true)
    public List<PeakHours> getPeakHours() {
        List<PeakHours> peakhours= repository.getPeakHours();
        if(peakhours.isEmpty()){
            throw new IllegalArgumentException("No Peak Hours data available.");
        }
        logger.info("Returned {} records", peakhours.size());
        return peakhours;
    }

    @Override
    @Transactional(readOnly = true)
    public List<EnvironmentalImpact> getEnvironmentalImpact() {
        List<EnvironmentalImpact> env_imp=repository.getEnvironmentalImpact();
        if(env_imp.isEmpty()){
            throw new IllegalArgumentException("No Environmental Impact data available.");
        }
        logger.info("Returned {} records", env_imp.size());
        return env_imp;
    }

    @Override
    @Transactional(readOnly = true)
    public List<IncidentSummary> getIncidentSummary() {
        List<IncidentSummary> summary= repository.getIncidentSummary();
        if(summary.isEmpty()){
            throw new IllegalArgumentException("No Incident Summary data available.");
        }
        logger.info("Returned {} records", summary.size());
        return summary;
    }
}
