package com.smartcity.traffic_api.dto;

import java.time.LocalDateTime;

public record ApiResponse<T>(
        LocalDateTime timestamp,
        String message,
        T data
) {}