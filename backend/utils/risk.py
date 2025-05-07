import numpy as np

def calculate_var(df, confidence_level=0.95):
    returns = df['Close'].pct_change().dropna()
    VaR = np.percentile(returns, (1-confidence_level)*100)
    return round(VaR, 4)
