from models import TrafficEvent

class EventProducer:
    def create_event(self, mapped):
        return TrafficEvent(**mapped)