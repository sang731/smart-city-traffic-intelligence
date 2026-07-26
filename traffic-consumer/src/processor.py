class EventProcessor:

    def process(self, event):
        print(f"[PROCESSING] "f"{event.sensor_id} "f"{event.location}")
        return event