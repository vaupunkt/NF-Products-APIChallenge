import { getAllProducts } from "../../../services/productServices.js";

export default function handler(request, response) {
  response.status(200).json(getAllProducts());
}
