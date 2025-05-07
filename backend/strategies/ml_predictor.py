import numpy as np
from sklearn.ensemble import RandomForestRegressor

def predict_next_day(df):
    df["Tomorrow"] = df["Close"].shift(-1)
    X = df[["Close"]].iloc[:-1].values
    y = df["Tomorrow"].iloc[:-1].values

    model = RandomForestRegressor()
    model.fit(X, y)

    last_close = df["Close"].iloc[-1]
    prediction = model.predict(np.array([[last_close]]))[0]

    return round(prediction, 2)
