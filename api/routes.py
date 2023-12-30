import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

from flask import Blueprint, jsonify, request
import numpy as np

api_routes = Blueprint("api", __name__)

@api_routes.route("/api/test", methods=["GET"])
def test():
    return jsonify(message="Connected. Good luck!")

#=====================[Machine Learning]=====================
import joblib

# Load the model
model_jabodetabek_house_price_predictions = joblib.load("D:/Bahasa Pemrograman/Web/sabrinaazizaulia//api/ml_model/jabodetabek_house_price_prediction/jabodetabek_house_price_predicat.keras")

# Use the model file
@api_routes.route("/api/model/predict", methods=["GET"])
def use_model():
    data_params = request.args
    data = {}

    for key, values in data_params.items():
      print(f"{key} : {values}")
      data[key] = values
      print(f"{key} : {type(values)} - {type(data[key])} ")
    
    parameters = parameters_jabodetabek_house_price(int(data['banyakKamar']), int(data['banyakKamarMandi']),float(data['luasTanah']),float(data['luasBangunan']),
                                       int(data['carports']),int(data['banyakLantai']),data['kondisiProperty'],data['adaTidaknyaProperty'],
                                       data['sertifikat'],data['lokasi'])
    print(parameters)
    predictions = model_jabodetabek_house_price_predictions.predict(parameters).tolist()
    return jsonify(preditct=predictions)










# Function
def parameters_jabodetabek_house_price(n_bedrooms,n_bathrooms,land_size,building_size,carports,floors,property_condition,furnishing,certificate,locations):
  certificate_data = ['hgb','shm']
  location_data = ['Bekasi', 'Bogor', 'Depok', 'Jakarta Barat', 'Jakarta Pusat',
                   'Jakarta Selatan','Jakarta Timur', 'Jakarta Utara', 'Tangerang']
  property_data =['tidak baik', 'baik', 'sangat baik']
  furnishing_data =['unfurnished','semifurnished','furnished']


  property_index = -1
  furnishing_index = -1
  certificate_index = -1
  locations_index = -1


  for i, value in enumerate(property_data):
    if property_condition == value:
      property_index = i+1

  for i, value in enumerate(furnishing_data):
    if furnishing == value:
      furnishing_index = i+1

  for i, value in enumerate(certificate_data):
    if certificate == value:
      certificate_index = i

  for i, value in enumerate(location_data):
    if locations == value:
      locations_index = i

  new_data = [n_bedrooms,n_bathrooms,land_size,building_size,carports,floors,property_index,furnishing_index,0,0,0,0,0,0,0,0,0,0,0]

  for i, value in enumerate(certificate_data):
    if certificate_index == i:
      new_data[8+i] = 1
    else:
      new_data[8+i] = 0

  for i, value in enumerate(location_data):
    if locations_index == i:
      new_data[10+i] = 1
    else:
      new_data[10+i] = 0

  return np.array([new_data])