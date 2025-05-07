from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from utils.data import get_stock_data
from strategies.ml_predictor import predict_next_day
from utils.risk import calculate_var

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"])

@app.get("/")
async def root():
    return {"status": "AlphaPulse Backend API running."}

@app.get("/predict/{symbol}")
async def predict(symbol: str):
    data = get_stock_data(symbol)
    prediction = predict_next_day(data)
    return {"symbol": symbol, "predicted_price": prediction}

@app.get("/risk/{symbol}")
async def risk(symbol: str):
    data = get_stock_data(symbol)
    risk = calculate_var(data)
    return {"symbol": symbol, "VaR": risk}
