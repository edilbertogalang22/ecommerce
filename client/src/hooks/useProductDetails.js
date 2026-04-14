import { useEffect, useState } from "react";
import api from "../api/api";
import { useParams } from "react-router-dom";

const useProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const res = await api.get(`/products/product/${id}`);
        setProduct(res.data);

      } catch (err) {
        setError(err);
        console.error(err);

      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};

export default useProductDetails;