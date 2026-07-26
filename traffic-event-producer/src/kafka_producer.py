import json
from kafka import KafkaProducer


class TrafficKafkaProducer:
    def __init__(self):
        self.producer = KafkaProducer(bootstrap_servers="localhost:9092",value_serializer=lambda v: json.dumps(v).encode("utf-8"),
            key_serializer=lambda k: str(k).encode("utf-8"),acks="all",retries=5)

    def publish(self, topic, event):
        try:
            future=self.producer.send(topic,key=event["sensor_id"],value=event)
            metadata=future.get(timeout=10)
            print(f"Published event to topic {metadata.topic} partition {metadata.partition} offset {metadata.offset}")
        except Exception as e:
            print(f"Error occurred while publishing event: {e}")

    def close(self):
        self.producer.flush()
        self.producer.close()