import { booksEndpoint } from './endpoints';

export const getAllBooks = async () => {
  try {
    let serviceResponse;

    const response = await fetch(booksEndpoint);
    const parsedResponse = await response.json();

    if (response.status === 200) {
      serviceResponse = { success: true, data: parsedResponse };
    } else {
      serviceResponse = { success: false, data: parsedResponse };
    }
    console.log('serviceResponse', JSON.stringify(serviceResponse, null, 2));
    return serviceResponse;
  } catch (error) {
    console.log('Error fetching all books: ', error);
    return {
      success: false,
      data: error,
    };
  }
};
