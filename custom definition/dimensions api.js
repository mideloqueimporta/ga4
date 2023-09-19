function getDimensionsList() {
  let propertyId = "AAAAAAA";
  let customDimensions = AnalyticsAdmin.Properties.CustomDimensions.list(`properties/${propertyId}`);
  Logger.log(customDimensions);
}

function createDimension() {
  let propertyId = "AAAAAAA";
  let dimension = {
    "parameterName": "product_name",
    "displayName": "Product Name",
    "description": "It's the product selected by user",
    "disallowAdsPersonalization": false,
    "scope": "event"
  }
  let customDimension = AnalyticsAdmin.Properties.CustomDimensions.create(dimension, `properties/${propertyId}`);
  Logger.log(customDimension);
}
