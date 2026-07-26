import uuid
from datetime import datetime
from utils import (generate_event_id,generate_sensor_id,ingestion_timestamp)
class DatasetMapper:
    def __init__(self, profile):
        self.profile = profile

    def map(self, row):
        metrics = {}
        metadata = {}

        for key, column in self.profile["metrics"].items():
            metrics[key] = row[column]

        for key, column in self.profile["metadata"].items():
            metadata[key] = row[column]

        location = " | ".join(str(row[column]) for column in self.profile["location_columns"])

        return {
            "event_id": generate_event_id(),
            "sensor_id": generate_sensor_id(),
            "city": self.profile["city"],
            "event_timestamp": str(row[self.profile["timestamp_column"]]),
            "location": location,
            "metrics": metrics,
            "metadata": metadata,
            "ingestion_timestamp": ingestion_timestamp()
        }