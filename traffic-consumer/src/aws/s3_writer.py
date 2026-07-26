from dataclasses import asdict
import json
import boto3

class S3Writer:
    def __init__(self):
        self.bucket_name = "traffic-intelligence-bronze-bucket"
        self.s3 = boto3.client("s3")

    def upload_event(self, event):
        timestamp = event.event_timestamp

        key = (f"bronze/raw-events/"f"{timestamp.year}/"f"{timestamp.month:02}/"f"{timestamp.day:02}/"f"{event.event_id}.json")
        self.s3.put_object(Bucket=self.bucket_name,Key=key,Body=json.dumps(asdict(event), indent=4, default=str),ContentType="application/json")
        print(f"Uploaded -> {key}")