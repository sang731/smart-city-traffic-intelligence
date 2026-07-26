import json

class ConfigLoader:

    @staticmethod
    def load(path: str):
        with open(path, "r", encoding="utf-8") as file:
            return json.load(file)