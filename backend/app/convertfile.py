import pandas as pd
from sqlalchemy import create_engine

# MySQL connection parameters
username = 'your_username'
password = 'your_password'
host = 'localhost'
database = 'rice_data'

# Create a connection engine for MySQL
DATABASE_URL = "mysql+mysqlconnector://root:root@localhost:3306/paddy_cultivation_db"

# Read the Excel file into a pandas DataFrame
df = pd.read_excel('RiceVarietiesData.xlsx', engine='openpyxl')

# Directly insert the data into the MySQL table
df.to_sql('rice_detail', con=DATABASE_URL, if_exists='append', index=False)

print("Excel data successfully imported into MySQL!")
