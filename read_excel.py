import pandas as pd
import json

try:
    df = pd.read_excel("public/酒店智能体深度运营情况表.xlsx")
    # Convert dates to string to ensure JSON serialization
    for col in df.columns:
        if df[col].dtype == 'datetime64[ns]':
            df[col] = df[col].astype(str)
    
    result = {
        "columns": df.columns.tolist(),
        "data": df.fillna("").values.tolist()
    }
    print(json.dumps(result, ensure_ascii=False))
except Exception as e:
    print(json.dumps({"error": str(e)}))
