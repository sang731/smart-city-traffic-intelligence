import time
from dataclasses import asdict

from config_loader import ConfigLoader
from csv_reader import CSVReader
from mapper import DatasetMapper
from event_producer import EventProducer
from kafka_producer import TrafficKafkaProducer

config = ConfigLoader.load("config/producer_config.json")
profile = ConfigLoader.load(config["dataset_profile"])
reader = CSVReader(config["dataset_path"])
df = reader.load()

mapper = DatasetMapper(profile)
generator = EventProducer()
producer = TrafficKafkaProducer()
topic = "traffic-events"

try:
    for r, row in df.iterrows():
        mapped = mapper.map(row)
        event = generator.create_event(mapped)
        producer.publish(topic, asdict(event))

        time.sleep(config["event_interval_seconds"])

except KeyboardInterrupt:
    print("Traffic event producer stopped.")

finally:
    producer.close()