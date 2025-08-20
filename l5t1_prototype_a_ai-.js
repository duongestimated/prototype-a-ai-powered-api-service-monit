// Data Model for AI-powered API Service Monitor

const ApiService = {
  id: String,
  name: String,
  url: String,
  description: String,
  metrics: {
    responseTime: Number,
    errorRate: Number,
    successRate: Number,
    latency: Number
  },
  alerts: [
    {
      threshold: Number,
      notificationChannel: String, // email, slack, etc.
      notificationMessage: String
    }
  ],
  mlModel: {
    type: String, // regression, classification, etc.
    trainedOn: Date,
    accuracy: Number,
    predictions: [
      {
        timestamp: Date,
        predictedValue: Number
      }
    ]
  },
  logs: [
    {
      timestamp: Date,
      requestMethod: String,
      requestUrl: String,
      responseCode: Number,
      responseTime: Number
    }
  ]
};

const MonitorConfig = {
  pollingInterval: Number, // in seconds
 apiServices: [ApiService],
  notificationChannels: [
    {
      type: String, // email, slack, etc.
      config: Object
    }
  ]
};

module.exports = { ApiService, MonitorConfig };