import axios from "axios"
const newConnectors = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/34814/connectors",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
