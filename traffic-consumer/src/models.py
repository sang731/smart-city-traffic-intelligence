from dataclasses import dataclass
from datetime import datetime
from typing import Dict, Any

@dataclass
class TrafficEvent:
    event_id: str
    sensor_id: str
    city: str
    event_timestamp: datetime
    location: str
    metrics: Dict[str, Any]
    metadata: Dict[str, Any]
    ingestion_timestamp: str