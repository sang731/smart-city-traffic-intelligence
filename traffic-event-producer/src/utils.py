from datetime import datetime
import uuid

def generate_event_id():
    return str(uuid.uuid4())

def generate_sensor_id():
    return f"SENSOR-{uuid.uuid4().hex[:8].upper()}"

def ingestion_timestamp():
    return datetime.utcnow().isoformat()