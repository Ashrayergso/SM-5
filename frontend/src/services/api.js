import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchNextAvailability = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/next-availability/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchShipsWithNoFutureAssignment = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/ships-no-future-assignment/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMainMatching = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/main-matching/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};