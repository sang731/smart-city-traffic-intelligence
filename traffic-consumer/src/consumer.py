import json
from kafka import KafkaConsumer

class TrafficConsumer:
    def __init__(self):
        self.consumer = KafkaConsumer("traffic-events",bootstrap_servers="localhost:9092",
            auto_offset_reset="earliest",enable_auto_commit=True,group_id="traffic-group",
            value_deserializer=lambda m: json.loads(m.decode("utf-8"))
        )