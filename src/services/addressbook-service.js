import config from "../config/config";
import AxiosService from "./axios-service.js";

export default class AddressBookService {
    baseUrl = config.baseUrl;
    getContactDetails() {
      return AxiosService.getAPIService(`${this.baseUrl}addressbook/contactlist`);
    }
  
}