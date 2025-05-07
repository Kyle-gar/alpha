import yfinance as yf

def get_stock_data(symbol):
    df = yf.Ticker(symbol).history(period="1y")
    return df.dropna()
