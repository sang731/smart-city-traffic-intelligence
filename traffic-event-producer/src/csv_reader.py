import pandas as pd

class CSVReader:
    def __init__(self, csv_path):
        self.csv_path = csv_path

    def load(self):
        return pd.read_csv(self.csv_path)