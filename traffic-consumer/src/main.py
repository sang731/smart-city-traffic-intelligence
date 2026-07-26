from datetime import datetime

from consumer import TrafficConsumer
from processor import EventProcessor
from models import TrafficEvent
from aws.s3_writer import S3Writer

consumer = TrafficConsumer()
processor = EventProcessor()
writer = S3Writer()

for message in consumer.consumer:
    event_dict = message.value
    event_dict["event_timestamp"] = datetime.fromisoformat(event_dict["event_timestamp"])

    event = TrafficEvent(**event_dict)
    processed_event = processor.process(event)
    writer.upload_event(processed_event)